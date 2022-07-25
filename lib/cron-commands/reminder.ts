import {WechatyInterface} from 'wechaty/impls';
import arrayShuffle from 'array-shuffle';
import * as scheduler from 'node-schedule';

import config from '../../config/config.json';
import {CronCommand} from './command';

export class ReminderCronCommand implements CronCommand {
  async run(bot: WechatyInterface): Promise<void> {
    for (const reminderConfig of config.cron_command.reminder) {
      const room = await bot.Room.find({topic: reminderConfig.group_name});
      if (room != undefined) {
        scheduler.scheduleJob(`reminder-${reminderConfig.id}-${room.id}`, reminderConfig.pattern, function() {
          room?.say(arrayShuffle(reminderConfig.texts)[0]);
        });
      }
    }
  }
}
