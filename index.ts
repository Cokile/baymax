import {WechatyBuilder, ScanStatus, log, Message, ContactSelf} from 'wechaty';
import {PuppetPadlocal} from 'wechaty-puppet-padlocal';

import config from './config/config.json';
import {CronCommandController} from './lib/cron-commands/controller';
import {MessageHandler} from './lib/message-handler/handler';
import {MessageCommandController} from './lib/message-handler/commands/controller';
import {MessageRecallHandler} from './lib/message-handler/recall/handler';

function onScan(qrcode: string, status: ScanStatus) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    log.info('baymax', 'onScan: %s - %s', ScanStatus[status], qrcode);
  } else {
    log.info('baymax', 'onScan: %s', ScanStatus[status]);
  }
}

async function onLogin(user: ContactSelf) {
  log.info('baymax', '%s login', user);
  cronCommandController.run(bot);
}

async function onMessage(message: Message) {
  for await (const handler of messageHandlers) {
    if (await handler.handleMessage(message, bot)) {
      break;
    }
  }
}

function onLogout(user: ContactSelf) {
  log.info('baymax', '%s logout', user);
}

// order matters
const messageHandlers: MessageHandler[] = [
  new MessageCommandController(),
  new MessageRecallHandler(),
];
messageHandlers.forEach((handler) => {
  handler.setup();
});

const cronCommandController = new CronCommandController();
cronCommandController.setup();

const bot = WechatyBuilder.build({
  name: 'baymax',
  puppet: new PuppetPadlocal({
    token: config.puppet_token,
  }),
});

bot
    .on('scan', onScan)
    .on('login', onLogin)
    .on('logout', onLogout)
    .on('message', onMessage)
    .start()
    .then(() => log.info('baymax', 'bot started'))
    .catch((e) => log.error('baymax', e));


