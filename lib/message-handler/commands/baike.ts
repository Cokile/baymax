import {Message} from 'wechaty';
import {WechatyInterface} from 'wechaty/impls';
import {AxiosRequestHeaders} from 'axios';

import {MessageCommand} from './command';
import NetworkUtil from '../../utils/network';
import WechatyUtil from '../../utils/wechaty';

export class BaikeMessageCommand implements MessageCommand {
  name: string = 'baike';
  shorthandName?: string = 'bk';
  description: string = 'Show baike of the query.';
  helpMessage: string = 'Use `baike $(query)` to get the baike of the query.';
  general: Boolean = true;

  async run(args: string[], message: Message, _bot: WechatyInterface): Promise<void> {
    if (args.length == 0) {
      WechatyUtil.reply(message, this.helpMessage);
      return;
    }

    const query = args.join(' ');

    const wikipedia = await this.searchWikipedia(query);
    if (wikipedia != undefined) {
      WechatyUtil.reply(message, wikipedia!);
      return;
    }

    const baidu = await this.serachBaiduBaike(query);
    WechatyUtil.reply(message, baidu);
  }

  private async searchWikipedia(query: string): Promise<string | undefined> {
    let url: string;
    let headers: AxiosRequestHeaders;

    const chineseRegex = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/;
    if (query.match(chineseRegex)) {
      url = `https://zh.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
      headers = {'Accept-Language': 'zh-cn'};
    } else {
      url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
      headers = {};
    }

    const data = await NetworkUtil.get(url, headers);
    if (data) {
      return data.extract;
    } else {
      return undefined;
    }
  }

  private async serachBaiduBaike(query: string): Promise<string> {
    const url = `https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?format=json&appid=379020&bk_length=600&bk_key=${encodeURIComponent(query)}`;
    const data = await NetworkUtil.get(url);
    return `${data.abstract}`;
  }
}
