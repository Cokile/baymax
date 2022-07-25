import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';

export interface MessageHandler {
  setup(): void
  handleMessage(message: Message, bot: WechatyInterface): Promise<Boolean>
}
