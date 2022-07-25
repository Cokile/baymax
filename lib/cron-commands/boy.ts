// import {WechatyInterface} from 'wechaty/impls';
// import * as scheduler from 'node-schedule';
//
// import RedBookUtil from '../utils/red-book';
// import config from '../../config/config.json';
// import {CronCommand} from './command';
//
// export class BoyCronCommand implements CronCommand {
//   async run(bot: WechatyInterface): Promise<void> {
//     for (const config of config.boy) {
//       const room = await bot.Room.find({topic: config.groupName});
//       if (room != undefined) {
//         scheduler.scheduleJob(`boy-${room.id}`, config.pattern, async function() {
//           const link = await RedBookUtil.getBoy(bot);
//           if (link != undefined) {
//             room?.say(link);
//           }
//         });
//       }
//     }
//   }
// }
