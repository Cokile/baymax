import {Message} from 'wechaty';

import config from '../../config/config.json';
import {MessageCommand} from '../message-handler/commands/command';

export default class MessageCommandUtil {
  static commandOf(name: string, commands: MessageCommand[]): MessageCommand | undefined {
    if (name.length == 0) {
      return undefined;
    }

    return commands.find(function(command) {
      return command.name == name || command.shorthandName == name;
    });
  }

  static hasPermissionToUse(command: MessageCommand, message: Message): Boolean {
    if (command.general) {
      return true;
    }

    const talker = message.talker();
    const room = message.room();

    if (room) {
      return config.message_handler.command.group_allow_list.includes(room.id);
    } else {
      return config.message_handler.command.user_allow_list.includes(talker.id);
    }
  }
}
