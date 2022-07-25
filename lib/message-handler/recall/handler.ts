import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';
import xml2js from 'xml2js';

import config from '../../../config/config.json';
import WechatyUtil from '../../utils/wechaty';
import {MessageHandler} from '../handler';

export class MessageRecallHandler implements MessageHandler {
  setup(): void {}

  async handleMessage(message: Message, bot: WechatyInterface): Promise<Boolean> {
    if (config.message_handler.recall.group_ids.includes(message.talker().id)) {
      // ignore messages sent by blacklist users, such as WeChat Teams
      return false;
    }

    // ignore messages sent by the bot itself
    if (message.self()) {
      return false;
    }

    const room = message.room();

    // ignore messages in p2p chats
    if (room == undefined) {
      return false;
    }

    // recalless is not enabled for this group
    if (config.message_handler.recall.group_ids.indexOf(room.id) < 0) {
      return false;
    }

    if (message.type() == bot.Message.Type.Recalled) {
      const recalledMessage = await this.getRecalledMessage(message);
      if (recalledMessage) {
        const talker = message.talker();
        let canHandle = true;
        switch (recalledMessage.type()) {
          case bot.Message.Type.Text:
            WechatyUtil.reply(message, `【${talker.name()} 撤回了一条消息】\n${recalledMessage.text()}`);
            break;
          case bot.Message.Type.Image:
            const image = recalledMessage.toImage();
            WechatyUtil.reply(message, `【${talker.name()} 撤回了一张图片】`);
            WechatyUtil.reply(message, await image.artwork());
            break;
          default:
            canHandle = false;
            break;
        }
        return canHandle;
      }
    }

    return false;
  }

  private async getRecalledMessage(message: Message): Promise<Message | undefined> {
    // the recalled message.text is some xml data structure like:
    // <sysmsg type="revokemsg">
    //  <revokemsg>
    //   <session>20820541738@chatroom</session>
    //   <msgid>1154925614</msgid>
    //   <newmsgid>7330772355966176003</newmsgid>
    //   <replacemsg>
    //    <![CDATA["Cokile" 撤回了一条消息]]>
    //   </replacemsg>
    //  </revokemsg>
    // </sysmsg>
    // the newmsgid is the id for the original message
    const object = await xml2js.parseStringPromise(message.text());
    const originalMessageID = object['sysmsg']['revokemsg'][0]['newmsgid'][0];
    if (originalMessageID == undefined) {
      return undefined;
    }

    const originalMessage = await message.wechaty.Message.find({id: originalMessageID});
    return originalMessage;
  }
}
