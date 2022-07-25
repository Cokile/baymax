import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';

import WechatyUtil from '../../utils/wechaty';
import MessageCommandUtil from '../../utils/message-command';
import {MessageCommand} from './command';

export class HelpMessageCommand implements MessageCommand {
  name: string = 'help';
  shorthandName?: string = 'h';
  description: string = 'Show usage of the bot or comand.';
  helpMessage: string = 'Use `help [command]` to show uasage of the command or the bot if [command] is omitted.';
  general: Boolean = true;

  commands: MessageCommand[] = [];

  async run(args: string[], message: Message, _bot: WechatyInterface): Promise<void> {
    if (args.length == 0) {
      WechatyUtil.reply(message, this.fullHelpText(message));
    } else {
      const command = MessageCommandUtil.commandOf(args[0], this.commands);
      if (command) {
        WechatyUtil.reply(message, command.helpMessage);
      } else {
        WechatyUtil.reply(message, 'Command not found.');
      }
    }
  }

  private fullHelpText(message: Message): string {
    const commandsHelps = this.commands.filter(function(command) {
      return MessageCommandUtil.hasPermissionToUse(command, message);
    }).map(function(command) {
      if (command.shorthandName == undefined) {
        return `${command.name}: ${command.description}`;
      }
      return `${command.name}, ${command.shorthandName}: ${command.description}`;
    });
    return commandsHelps.join('\n');
  }
}

