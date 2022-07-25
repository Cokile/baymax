import {WechatyInterface} from 'wechaty/impls';

export interface CronCommand {
  run(bot: WechatyInterface): Promise<void>
}
