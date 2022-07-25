import {WechatyInterface} from 'wechaty/impls';
import {FileBox} from 'file-box';
import * as scheduler from 'node-schedule';

import config from '../../config/config.json';
import {CronCommand} from './command';
import NetworkUtil from '../utils/network';

export class CatCronCommand implements CronCommand {
  async run(bot: WechatyInterface): Promise<void> {
    for (const catConfig of config.cron_command.cat) {
      const room = await bot.Room.find({topic: catConfig.group_name});
      if (room != undefined) {
        scheduler.scheduleJob(`cat-${room.id}`, catConfig.pattern, async function() {
          const image = await CatCronCommand.getCatImage();
          room?.say(image);
        });
      }
    }
  }

  private static async getCatImage(): Promise<FileBox> {
    const url = `https://api.thecatapi.com/v1/images/search?mime_types=jpg,png`;
    const data = await NetworkUtil.get(url);
    return FileBox.fromUrl(data[0].url);
  }
}
