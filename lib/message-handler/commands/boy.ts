import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';

import WechatyUtil from '../../utils/wechaty';
import RedBookUtil from '../../utils/red-book';
import {MessageCommand} from './command';

export class BoyMessageCommand implements MessageCommand {
  name: string = 'boy';
  description: string = 'Get a handsome boy from Little Red Book.';
  helpMessage: string = 'Use `handsome` to get a handsome boy from Little Red Book.';
  general: Boolean = false;

  async run(_args: string[], message: Message, bot: WechatyInterface): Promise<void> {
    const boy = await RedBookUtil.getBoy(bot);
    if (boy == undefined) {
      WechatyUtil.reply(message, 'Boy not found.');
    } else {
      WechatyUtil.reply(message, boy!);
    }
  }
}
