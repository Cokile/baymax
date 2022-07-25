import {WechatyInterface} from 'wechaty/impls';
import arrayShuffle from 'array-shuffle';
import * as scheduler from 'node-schedule';

import config from '../../config/config.json';
import {CronCommand} from './command';

export class BirthdayCronCommand implements CronCommand {
  async run(bot: WechatyInterface): Promise<void> {
    const texts = config.cron_command.birthday.texts;
    for (const person of config.cron_command.birthday.people) {
      const room = await bot.Room.find({topic: person.group_name});
      const personName = person.fallback_name;

      if (room != undefined) {
        scheduler.scheduleJob(`birthday-${room.id}-${person.wechat_id}`, person.pattern, async function() {
          const members = await room.memberAll();
          const member = members.find(function(member) {
            member.id == person.wechat_id;
          });
          const text = arrayShuffle(texts)[0];
          if (member != undefined) {
            room.say(`${member!} ${text}`);
          } else {
            room.say(`${personName} ${text}`);
          }
        });
      }
    }
  }
}
