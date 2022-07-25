import fs from 'fs';

import {FileBoxInterface, FileBox} from 'file-box';
import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';
import puppeteer from 'puppeteer';
import {Md5} from 'ts-md5/dist/md5';

import WechatyUtil from '../../utils/wechaty';
import {MessageCommand} from './command';

export class QuoteMessageCommand implements MessageCommand {
  name: string = 'quote';
  shorthandName?: string = 'q';
  description: string = 'Generate quote image for a message.';
  helpMessage: string = 'Quote a message and use `quote` to generate a quote image for the quoted message';
  general: Boolean = true;

  async run(_args: string[], message: Message, bot: WechatyInterface): Promise<void> {
    if (!WechatyUtil.hasQuote(message)) {
      WechatyUtil.reply(message, 'No quoted message');
      return;
    }

    const talkerNameAndContent = await this.getTalkNameAndContent(message);
    const talkerName = talkerNameAndContent[0];
    const content = talkerNameAndContent[1];
    if (talkerName.length == 0 || content.length == 0) {
      return;
    }
    const avatar = await this.getAvatar(message, talkerNameAndContent[0], bot);

    const avatarPath = await this.downloadAvatar(avatar);
    const image = await this.generateQuoteImage(avatar, avatarPath, talkerName, content);

    WechatyUtil.reply(message, image);
  }

  private async getTalkNameAndContent(message: Message): Promise<[string, string]> {
    const quote = await WechatyUtil.getQuote(message, true);
    // quoted message format: xxx：yyy
    const index = quote.indexOf('：');
    if (index < 0) {
      return ['', ''];
    }

    const talkerName = quote.slice(0, index);

    let content = quote.slice(index + 1);
    const contentLength = 150;
    if (content.length > contentLength) {
      content = content.slice(0, contentLength) + '...';
    }

    return [talkerName, content];
  }

  private async getAvatar(message: Message, talkerName: string, bot: WechatyInterface): Promise<FileBoxInterface> {
    let avatar = await bot.currentUser.avatar();

    const room = message.room();
    const talker = message.talker();
    if (room) {
      const member = await room!.member(talkerName);
      if (member) {
        avatar = await member!.avatar();
      }
    } else if (talker.name() == talkerName) {
      avatar = await talker.avatar();
    }

    return avatar;
  }

  private async downloadAvatar(avatar: FileBoxInterface): Promise<string> {
    const dirPath = `${process.env.PWD}/artifact/avtars}`;
    const avatarPath = `${dirPath}/${avatar.name}`;

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, {recursive: true});
    }

    await avatar.toFile(avatarPath, true);
    return avatarPath;
  }

  // eslint-disable-next-line max-len
  private async generateQuoteImage(avatar: FileBoxInterface, avatarPath: string, talkerName: string, content: string): Promise<FileBoxInterface> {
    const dirPath = `${process.env.PWD}/artifact/quotes`;
    const quoteImageName = Md5.hashStr(avatar.name + talkerName + content);
    const quoteImagePath = `${dirPath}/${quoteImageName}.jpg`;
    const quoteHtmlPath = `${dirPath}/${quoteImageName}.html`;

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, {recursive: true});
    }

    const html = `
    <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            html {
              height: 100%;
            }

            body, .image {
              width: 100%;
              height: 100%;
              margin: 0;
            }

            .image {
              background-image: url(file://${avatarPath});
              background-size: cover;
              background-position: center;
              filter: blur(2px);
            }

            .colorShadow, .darkShadow {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .colorShadow {
              background-color: transparent;
              position: absolute;
              top: 0;
            }

            .darkShadow {
              background-color: #000000BB;
            }

            .content {
              padding: 12px;
              margin: 16px;
              width: calc(100% - 68px);
              height: calc(100% - 68px);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .content span {
              color: white;
              font-size: 35px;
              text-align: center;
            }

            .content .author {
              color: white;
              font-size: 20px;
              position: absolute;
              bottom: 8px;
              width: 100%;
              filter: brightness(0.8);
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="image"></div>
          <div class="colorShadow">
            <div class="darkShadow">
              <div class="content">
                <span>${content}</span>
                <div class="author">
                  @${talkerName}
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    fs.writeFileSync(quoteHtmlPath, html);

    const width = 600;
    const height = 600;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: width, height: height, deviceScaleFactor: 3});
    await page.goto(`file://${quoteHtmlPath}`);
    await page.screenshot({path: quoteImagePath});
    await browser.close();

    fs.unlinkSync(quoteHtmlPath);

    return FileBox.fromFile(quoteImagePath);
  }
}
