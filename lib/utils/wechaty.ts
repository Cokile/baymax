import {Message, Sayable} from 'wechaty';

export default class WechatyUtil {
  private static separator = '- - - - - - - - - - - - - - -\n';

  static reply(message: Message, content: Sayable) {
    const talker = message.talker();
    const room = message.room();
    if (room) {
      room.say(content);
    } else {
      talker.say(content);
    }
  }

  static hasQuote(message: Message): boolean {
    return message.text().includes(this.separator);
  }

  static async getQuote(message: Message, needMention: boolean): Promise<string> {
    let text = needMention ? message.text() : await message.mentionText();
    if (text.includes(this.separator)) {
      text = text.split(this.separator)[0];
      // remove the leading 「 and trailing 」
      text = text.trim().slice(1, -1);
    }
    return text;
  }

  static async removingQuote(message: Message, needMention: boolean): Promise<string> {
    let text = needMention ? message.text() : await message.mentionText();
    if (text.includes(this.separator)) {
      text = text.split(this.separator)[1];
    }
    return text;
  }
}
