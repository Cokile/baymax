import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';

import WechatyUtil from '../../utils/wechaty';
import {MessageCommand} from './command';

export class IDMessageCommand implements MessageCommand {
  name: string = 'id';
  description: string = 'Show id of users or the group.';
  helpMessage: string = [
    'Use `id [@mention]` to get the WeChat id of mentioned user in the same group.',
    'If mention is omitted, will fallback to the sender id.',
    'Use `id group` to the current group id.',
  ].join(' ');
  general: Boolean = true;

  commands: MessageCommand[] = [];

  async run(args: string[], message: Message, _bot: WechatyInterface): Promise<void> {
    let mentions = await message.mentionList();
    mentions = mentions.filter(function(mention) {
      return !mention.self();
    });

    if (args.length == 1 && args[0] == 'group') {
      const room = message.room();
      const topic = await room?.topic();
      WechatyUtil.reply(message, `${topic}: ${room?.id}`);
    } else if (mentions.length > 0) {
      const content = mentions.map(function(mention) {
        return `${mention.name()}: ${mention.id}`;
      }).join('\n');
      WechatyUtil.reply(message, content);
    } else {
      const talker = message.talker();
      WechatyUtil.reply(message, `${talker.name()}: ${talker.id}`);
    }
  }
}

