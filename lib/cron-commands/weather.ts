import {WechatyInterface} from 'wechaty/impls';
import * as scheduler from 'node-schedule';

import config from '../../config/config.json';
import {CronCommand} from './command';
import NetworkUtil from '../utils/network';

export class WeatherCronCommand implements CronCommand {
  async run(bot: WechatyInterface): Promise<void> {
    for (const weatherConfig of config.cron_command.weather.groups) {
      const room = await bot.Room.find({topic: weatherConfig.name});
      if (room != undefined) {
        scheduler.scheduleJob(`weather-${room.id}`, weatherConfig.pattern, async function() {
          const weather = await WeatherCronCommand.getWeather(weatherConfig.location);
          room?.say(weather);
        });
      }
    }
  }

  private static async getWeather(location: string): Promise<string> {
    const url = `https://devapi.qweather.com/v7/weather/3d?location=${location}&key=${config.cron_command.weather.api_token}`;
    const data = await NetworkUtil.get(url);
    const daily = data.daily[0];
    return [
      '今日天气预报：',
      `${daily.textDay}`,
      `温度：${daily.tempMin}°C - ${daily.tempMax}°C`,
      `紫外线强度指数：${daily.uvIndex}`,
      `${daily.windDirDay} ${daily.windScaleDay} 级，风速 ${daily.windSpeedDay} 公里/小时`,
    ].join('\n');
  }
}
