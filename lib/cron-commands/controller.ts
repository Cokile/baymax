import {WechatyInterface} from 'wechaty/impls';

import config from '../../config/config.json';
import {CronCommand} from './command';
// import {BoyCronCommand} from './boy';
import {BirthdayCronCommand} from './birthday';
import {CatCronCommand} from './cat';
import {ReminderCronCommand} from './reminder';
import {WeatherCronCommand} from './weather';

export class CronCommandController {
  private commands: CronCommand[] = [];

  setup() {
    // new BoyCronCommand,
    if (config.cron_command.commands.includes('birthday')) {
      this.commands.push(new BirthdayCronCommand());
    }
    // if (config.cron_command.commands.includes('boy')) {
    //   this.commands.push(new BoyMessageCommand());
    // }
    if (config.cron_command.commands.includes('cat')) {
      this.commands.push(new CatCronCommand());
    }
    if (config.cron_command.commands.includes('reminder')) {
      this.commands.push(new ReminderCronCommand());
    }
    if (config.cron_command.commands.includes('weather')) {
      this.commands.push(new WeatherCronCommand());
    }
  }

  async run(bot: WechatyInterface) {
    for (const command of this.commands) {
      await command.run(bot);
    }
  }
}

