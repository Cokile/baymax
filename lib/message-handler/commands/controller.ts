import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';

import config from '../../../config/config.json';
import WechatyUtil from '../../utils/wechaty';
import MessageCommandUtil from '../../utils/message-command';

import {MessageHandler} from '../handler';
import {MessageCommand} from './command';
import {HelpMessageCommand} from './help';
import {BaikeMessageCommand} from './baike';
// import {BoyMessageCommand} from './boy';
import {IDMessageCommand} from './id';
import {PetMessageCommand} from './pet';
import {QuoteMessageCommand} from './quote';

export class MessageCommandController implements MessageHandler {
  commands: MessageCommand[] = [];

  setup(): void {
    if (config.message_handler.command.commands.includes('baike')) {
      this.commands.push(new BaikeMessageCommand());
    }
    // if (config.message_handler.command.commands.includes('boy')) {
    //   this.commands.push(new BoyMessageCommand());
    // }
    if (config.message_handler.command.commands.includes('pet')) {
      this.commands.push(new PetMessageCommand());
    }
    if (config.message_handler.command.commands.includes('quote')) {
      this.commands.push(new QuoteMessageCommand());
    }

    this.commands.push(new IDMessageCommand());
    const helpCommand = new HelpMessageCommand();
    this.commands.push(helpCommand);
    helpCommand.commands = this.commands;
  }

  async handleMessage(message: Message, bot: WechatyInterface): Promise<Boolean> {
    // ignore messages sent by users from ignore list, such as WeChat Teams
    const ignoreList = ['weixin'];
    if (ignoreList.includes(message.talker().id)) {
      return false;
    }

    // ignore messages sent by the bot itself
    if (message.self()) {
      return false;
    }

    const text = await WechatyUtil.removingQuote(message, true);
    const room = message.room();

    const inGroup = room != undefined;

    // ignore messages that mentioning all in group
    // a humble check for mention all
    if (inGroup && (text.includes('@All') || text.includes('@所有人'))) {
      WechatyUtil.reply(message, 'Mentioning all is not supported yet.');
      return false;
    }

    const mentionSelf = await message.mentionSelf();
    const textWithoutMention = await WechatyUtil.removingQuote(message, false);

    // ignore messages not mention the bot in group chat
    if (inGroup && !mentionSelf) {
      return false;
    }

    // ignore empty message
    const components = textWithoutMention.split(' ');
    if (components.length == 0) {
      return false;
    }

    const command = MessageCommandUtil.commandOf(components[0], this.commands);
    if (command == undefined || !MessageCommandUtil.hasPermissionToUse(command!, message)) {
      return false;
    }

    await command?.run(components.slice(1), message, bot);
    return true;
  }
}
