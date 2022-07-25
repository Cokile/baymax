import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';
import {FileBox} from 'file-box';

import WechatyUtil from '../../utils/wechaty';
import NetworkUtil from '../../utils/network';
import {MessageCommand} from './command';

export class PetMessageCommand implements MessageCommand {
  name: string = 'pet';
  description: string = 'Get a random picture for cute pet.';
  helpMessage: string = 'Use `pet [cat|dog|fox]` to get a random picture for the pet. Fallback to a random pet if the pet name is ommited.';
  general: Boolean = true;

  async run(args: string[], message: Message, _bot: WechatyInterface): Promise<void> {
    const pets = ['cat', 'dog', 'fox'];
    let name = pets[~~(Math.random() * pets.length)];
    if (args.length > 0) {
      name = args[0].toLowerCase();
    }

    switch (name) {
      case 'dog':
        WechatyUtil.reply(message, await this.getDogImage());
        break;
      case 'fox':
        WechatyUtil.reply(message, await this.getFoxImage());
        break;
      case 'cat':
      default:
        WechatyUtil.reply(message, await this.getCatImage());
        break;
    }
  }

  private async getCatImage(): Promise<FileBox> {
    const url = 'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png';
    const data = await NetworkUtil.get(url);
    return FileBox.fromUrl(data[0].url);
  }

  private async getDogImage(): Promise<FileBox> {
    const url = 'https://api.thedogapi.com/v1/images/search?mime_types=jpg,png';
    const data = await NetworkUtil.get(url);
    return FileBox.fromUrl(data[0].url);
  }

  private async getFoxImage(): Promise<FileBox> {
    const url = 'https://randomfox.ca/floof/';
    const data = await NetworkUtil.get(url);
    return FileBox.fromUrl(data.image);
  }
}
