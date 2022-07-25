import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';

export interface MessageCommand {
  readonly name: string,
  readonly shorthandName?: string,
  readonly description: string,
  readonly helpMessage: string,
  readonly general: Boolean;

  run(args: string[], message: Message, bot: WechatyInterface): Promise<void>
}
