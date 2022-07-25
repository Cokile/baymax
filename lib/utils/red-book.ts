/* eslint-disable max-len */

import {WechatyInterface} from 'wechaty/impls';
import {UrlLink} from 'wechaty';
import arrayShuffle from 'array-shuffle';
import NetworkUtil from './network';

enum Boy {
  Handsome,
  Muscle,
  Tall,
  Youth,
  XuGuanghan,
  Kongliu,
  Wangjiaer,
}

export default class RedBookUtil {
  static async getBoy(bot: WechatyInterface): Promise<UrlLink | undefined> {
    const boys = Object.values(Boy).filter((n) => !(typeof n === 'string'));
    const boy = arrayShuffle(boys)[0] as Boy;

    switch (boy) {
      case Boy.Handsome:
        return this.extractNote(await this.getHandsome(), bot);
      case Boy.Muscle:
        return this.extractNote(await this.getMuscle(), bot);
      case Boy.Tall:
        return this.extractNote(await this.getTall(), bot);
      case Boy.Youth:
        return this.extractNote(await this.getYouth(), bot);
      case Boy.XuGuanghan:
        return this.extractNote(await this.getXuguanghan(), bot);
      case Boy.Kongliu:
        return this.extractNote(await this.getKongliu(), bot);
      case Boy.Wangjiaer:
        return this.extractNote(await this.getWangjiaer(), bot);
    }
  }

  private static async getHandsome(): Promise<any> {
    const data = await NetworkUtil.get('https://edith.xiaohongshu.com/api/sns/v10/search/notes?allow_rewrite=1&api_extra=&geo=eyJsYXRpdHVkZSI6MzEuMjQ4NDE4NDEzNzEwNzQsImxvbmdpdHVkZSI6MTIwLjY5Mjc4NDE4MzkyNTd9&keyword=%E5%B8%85%E5%93%A5&loaded_ad=&location_permission=1&page=1&page_pos=0&page_size=20&recommend_info_extra=&scene=history&search_id=2afkz4kr1bh9j9bluzs4x&session_id=2afkz34xfe07imnl5divp&sort=general&source=nearby_feed', {
      'Accept': ' */*',
      'Accept-Language': 'en-CN;q=1, zh-Hans-CN;q=0.9',
      'Accept-Encoding': 'br;q=1.0, gzip;q=1.0, compress;q=0.5',
      'xy-platform-info': 'platform=iOS&version=7.49.3&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&bundle=com.xingin.discover',
      'X-raw-ptr': '0',
      'xy-direction': '4',
      'x-legacy-did': '8D8FF69C-B094-4DA4-8287-C018F49535D7',
      'x-mini-mua': 'eyJhIjoiRUNGQUFGMDIiLCJjIjo4NiwiayI6ImQzMzFhOTQxOGFmODc3NmQyMTUyNDkxZTM4N2ZjNzZhZTUyMmMxOTgwZDNkNWYzNzZiOTgxMTZjYmQ3Y2FmNTQiLCJwIjoiaSIsInMiOiJkZDY2MDU2MzYzODI0YzE2NDI5YzllZWYyNjkxYjRlOCIsInUiOiIwMDAwMDAwMDE5NjdlYTYxNmUyYmM2ZWVhOTUwOGQ5ZmE2NjBmMmJjIiwidiI6IjEuMi4wIn0.RQRofmKvlBrCKSqlzbnG8Gyb83Sgh5ZOI4OPiIXdthRCO_8eifjnhuHjEotIBWxSfsFBN9oHPe2Iwe7xS0LayGAC6S5ntlHlRen1vq_hIpwOFi4S7011KZgMi495GxRZIYtgiYujkYOYElDvXy9YDrrsT5LAlblfweooP_c0Gr3leWucSYx-vvWmCdYJmGdgZxgv24m5LWJ21gko-r9Bi2wirc9hC55d1tVIQhyrAgIxpqgwe_sAf5tJrKK58dVNyuyI0E_yQ_Py-wYYA9SG-aD_mJ5pxtU27XWvoKl5eT1iOP8kdilR6PfG9mmHPlW4mwm2FYwGO1Xgw2suVjQ1fM23RFdNVvCBLGlSiIo410Zoi5WsNa2aTDKAImWWIadLkzFdQ9B-580teolguWT9AIStVdWpTk0cGwRLjXOeMefW3s6wNqFXlSCNqWTsk-pO08k5oKiG1N8Nk_3Ta_qsq1NLkv7HkcxxPNTnfHVRD08.',
      'X-Net-Core': 'crn',
      'X-B3-TraceId': 'f4b1c48f002c46af',
      'x-legacy-fid': '1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f',
      'Mode': 'rawIp',
      'x-legacy-sid': 'session.1659240762544937589578',
      'User-Agent': 'discover/7.49.3 (iPhone; iOS 16.0; Scale/2.00) Resolution/828*1792 Version/7.49.3 Build/7493005 Device/(Apple Inc.;iPhone11,8) NetType/WiFi',
      'xy-common-params': 'app_id=ECFAAF02&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&device_fingerprint=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_fingerprint1=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_model=phone&fid=1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f&identifier_flag=0&lang=en&launch_id=681005008&platform=iOS&project_id=ECFAAF&sid=session.1659240762544937589578&t=1659312237&teenager=0&tz=Asia/Shanghai&uis=light&version=7.49.3',
      'x-legacy-smid': '20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af',
      'x-mini-sig': '7bcad2ff7430d4c710af6aed277df4d54646a4f5ec67b040729bbc57247f253b',
      'shield': 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG43EKdeJWRKhKsYzG6LBuP52K/+lbz8Rercl+2aA6Fww9EWSAEr/92Shl8uM7bqGHL3w9vf5I8LANyhpB',
    });

    return data;
  }

  private static async getMuscle(): Promise<any> {
    const data = await NetworkUtil.get('https://edith.xiaohongshu.com/api/sns/v10/search/notes?allow_rewrite=1&api_extra=&geo=eyJsYXRpdHVkZSI6MzEuMjQ3MzAyOTkxODkyOSwibG9uZ2l0dWRlIjoxMjAuNjk1Njk5MjU1MTg5N30%3D&keyword=%E8%85%B9%E8%82%8C&loaded_ad=&location_permission=1&page=1&page_pos=0&page_size=20&recommend_info_extra=&scene=history&search_id=2afyxi7uv4xks33hvzlc5&session_id=2afyxi4qxmdflysq0sl2k&sort=general&source=nearby_feed', {
      'Accept': ' */*',
      'Accept-Language': 'en-CN;q=1, zh-Hans-CN;q=0.9',
      'Accept-Encoding': 'br;q=1.0, gzip;q=1.0, compress;q=0.5',
      'xy-platform-info': 'platform=iOS&version=7.49.3&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&bundle=com.xingin.discover',
      'X-raw-ptr': '0',
      'xy-direction': '4',
      'x-legacy-did': '8D8FF69C-B094-4DA4-8287-C018F49535D7',
      'x-mini-mua': 'eyJhIjoiRUNGQUFGMDIiLCJjIjo0OSwiayI6IjliNGE1MzU4NjdlMGJhNmU0YmIxMmYwYWIxMzM0ZWU5MWFjYWU5MmJhN2E2ZDYzNjdjNDlmMGZmZGI4MmFjM2EiLCJwIjoiaSIsInMiOiI4MTIwMTUzNmMzMWI5OGQ3ZmEwYzA4MGVkNDc3MGE2MSIsInUiOiIwMDAwMDAwMDE5NjdlYTYxNmUyYmM2ZWVhOTUwOGQ5ZmE2NjBmMmJjIiwidiI6IjEuMi4wIn0.2b38fMzuO0o7AhCuK5l972plebQinMBADvwtWXsuV_13BE2UWFHqdILwiSM2yJzhkieZNzyh1xFVnVnHKf9QCL6iT9EJwsPT7B5iY-rZ3hTvO7aO8Ff0gE3HQ4ExH_Ha92-v1PL7pMPcF-pvWcL4bblPA0MOI0YTaRjCACmDJP9yQqBdD0k8CyWTgystx_RT_nDWvO4D3xBi-TWudzH730qQI9DzXH0QAemHCRPrQwUQYUrwyCW6CHESxLP4_As1NkKuAOh4tnd6MMNWR36Vvw3MtV4t42Uq95-Qtagu8JGt-qm4ttUPMHbEpVEzT5le2t-foTxrSjNJ6qQuVOwp0cfwPbgl9Aq9pvoF3s2uId_k7Jfo_Ox2KsnyXOqAYqosCWLgoClV9HSoXY6qdqYweCXn5_OQ8EMtYvSDxxal5WDhR8ePtmuFCugoCC7AmWpRbL-EU_5C1VVY5EWtXuKjfcKyTYS-Jl8CnMDryxtasj4.',
      'X-Net-Core': 'crn',
      'X-B3-TraceId': 'a760f8c44a946c32',
      'x-legacy-fid': '1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f',
      'Mode': 'rawIp',
      'x-legacy-sid': 'session.1659240762544937589578',
      'User-Agent': 'discover/7.49.3 (iPhone; iOS 16.0; Scale/2.00) Resolution/828*1792 Version/7.49.3 Build/7493005 Device/(Apple Inc.;iPhone11,8) NetType/WiFi',
      'xy-common-params': 'app_id=ECFAAF02&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&device_fingerprint=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_fingerprint1=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_model=phone&fid=1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f&identifier_flag=0&lang=en&launch_id=681221778&platform=iOS&project_id=ECFAAF&sid=session.1659240762544937589578&t=1659528983&teenager=0&tz=Asia/Shanghai&uis=light&version=7.49.3',
      'x-legacy-smid': '20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af',
      'x-mini-sig': '2d46a787f314e71f2d34df904d34de0e2bdd4bb277bfcb4d7adf09719bb36871',
      'shield': 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG43EKdeJWRKhKsYzG6LBuP52K/+lbz8Rercl+2aA6Fww9EWSAEr/92Shl8uPe4OLHS+r4i68+pc81JC10',
    });

    return data;
  }

  private static async getTall(): Promise<any> {
    const data = await NetworkUtil.get('https://edith.xiaohongshu.com/api/sns/v10/search/notes?allow_rewrite=1&api_extra=&geo=eyJsYXRpdHVkZSI6MzEuMjQ3MjkyNjczMDk1MywibG9uZ2l0dWRlIjoxMjAuNjk1NzQ3NDEwODIyOH0%3D&keyword=185&loaded_ad=&location_permission=1&page=1&page_pos=0&page_size=20&recommend_info_extra=&scene=confirm&search_id=2afyy9xb8bat9nhmnr87j&session_id=2afyy9mwz6d1woa953g7q&sort=general&source=nearby_feed', {
      'Accept': ' */*',
      'Accept-Language': 'en-CN;q=1, zh-Hans-CN;q=0.9',
      'Accept-Encoding': 'br;q=1.0, gzip;q=1.0, compress;q=0.5',
      'xy-platform-info': 'platform=iOS&version=7.49.3&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&bundle=com.xingin.discover',
      'X-raw-ptr': '0',
      'xy-direction': '4',
      'x-legacy-did': '8D8FF69C-B094-4DA4-8287-C018F49535D7',
      'x-mini-mua': 'eyJhIjoiRUNGQUFGMDIiLCJjIjo2NCwiayI6ImNjODNlMTc2MDY1MzBjODA0YWU5Mjg1NTFmOWM4NDMzYWI0M2E0MmRiMzg2MDMxYzdlNjk1MDQ2OWFhNDRiMDgiLCJwIjoiaSIsInMiOiI2OTFjZWU3MGU4ODI2M2Q4NjU0MzkyODM0Yjc4NjUwYiIsInUiOiIwMDAwMDAwMDE5NjdlYTYxNmUyYmM2ZWVhOTUwOGQ5ZmE2NjBmMmJjIiwidiI6IjEuMi4wIn0.d4PIeyjIlys1uERwGODBHDqgHfAc0GiUKZJEGKYb_oMNn2UuH_9CdX8cUwshohenUcgFHt3X72vptDKg-0oTMQpf6HjNxeSGig9kW4Gs0OFaC4Yh7ussjM606mnxBDqQHWp2UV61qzkbkGwN0F00nebg-LUAaLgJRmhT9_ybEyzuWPLOhoDk0txzf1iIDoJHeNqPk9AN0vqV5QoS15hlwk7f1vIHwGoOhJQw6Mlb15MRtGxuXy-CnV2hzqBI8tuzcmTGbGPcJBWgIkKJRo3S96UZzhJbKH6BPvcJL4CvSCzHhPT9B4nNGqDKC2HO5TTxHZbJYc7xT1lcKuzAwiTLwPuHf-8fG2JKpDHwxc2Xb12CHqiRNjQtcu54PlwuO6ifuHuBDmErIySanddZ5bWnSDrgkx7ir0qiqgEC5VInsdSq7jrCQkmmGcoATbmxxdI2NaEIw0qRZDfbQLXKSJWlVIf44xNeMMjwA6zj69B5BoQ.',
      'X-Net-Core': 'crn',
      'X-B3-TraceId': 'efa78f7ebb385a44',
      'x-legacy-fid': '1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f',
      'Mode': 'rawIp',
      'x-legacy-sid': 'session.1659240762544937589578',
      'User-Agent': 'discover/7.49.3 (iPhone; iOS 16.0; Scale/2.00) Resolution/828*1792 Version/7.49.3 Build/7493005 Device/(Apple Inc.;iPhone11,8) NetType/WiFi',
      'xy-common-params': 'app_id=ECFAAF02&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&device_fingerprint=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_fingerprint1=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_model=phone&fid=1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f&identifier_flag=0&lang=en&launch_id=681222107&platform=iOS&project_id=ECFAAF&sid=session.1659240762544937589578&t=1659529315&teenager=0&tz=Asia/Shanghai&uis=light&version=7.49.3',
      'x-legacy-smid': '20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af',
      'x-mini-sig': 'ee1e575dcc5def97cf7aa717366d0eb028d411555536cccd60bb440928923f4e',
      'shield': 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG43EKdeJWRKhKsYzG6LBuP52K/+lbz8Rercl+2aA6Fww9EWSAEr/92Shl8uPO7ufTmkbh9PJtPiTWYGv0',
    });

    return data;
  }

  private static async getYouth(): Promise<any> {
    const data = await NetworkUtil.get('https://edith.xiaohongshu.com/api/sns/v10/search/notes?allow_rewrite=1&api_extra=&geo=eyJsYXRpdHVkZSI6MzEuMjQ3MzQ1NDMwNTk1MSwibG9uZ2l0dWRlIjoxMjAuNjk1NzQzNjkyODY4M30%3D&keyword=%E5%B0%91%E5%B9%B4%E6%84%9F&loaded_ad=&location_permission=1&page=1&page_pos=0&page_size=20&recommend_info_extra=&scene=history&search_id=2afz7i1i61yugxph0nwq2&session_id=2afz7fn5blzrhos7d9yo5&sort=general&source=search_result_notes', {
      'Accept': ' */*',
      'Accept-Language': 'en-CN;q=1, zh-Hans-CN;q=0.9',
      'Accept-Encoding': 'br;q=1.0, gzip;q=1.0, compress;q=0.5',
      'xy-platform-info': 'platform=iOS&version=7.49.3&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&bundle=com.xingin.discover',
      'X-raw-ptr': '0',
      'xy-direction': '4',
      'x-legacy-did': '8D8FF69C-B094-4DA4-8287-C018F49535D7',
      'x-mini-mua': 'eyJhIjoiRUNGQUFGMDIiLCJjIjo5MywiayI6Ijc3MDEzNDlhYzA1M2ZiYTAxOGEyZWU4YmQxMjUyZGM4M2ZlM2I2ZGM1ZWUxZDBmOGI2OWZjOTA2MTNkMjNlMzEiLCJwIjoiaSIsInMiOiJmODZkZGU0OTZlNDgyZjRjYTE2OGFiODcyZGRhNjI0YyIsInUiOiIwMDAwMDAwMDE5NjdlYTYxNmUyYmM2ZWVhOTUwOGQ5ZmE2NjBmMmJjIiwidiI6IjEuMi4wIn0.EC4kzcb2vn0F4tGNv71n3GiBWCDUDxiH0uHMFy5oz5uxxcO5cW0jQBTfB4azAcLSbutwEPsNT58CUEGif_-uRf_QfmfGXaEDnDOtFWMzu53JBKx2GLEpLT6mtJwUIVdKoFuI5PuMZ8NowRf_sIxZQek7Vk6yIqfXg3umcrlEdCg3FloxSOieo8lQ2hUbVn8R45JLa-GuadYPXjWgYWYVod6T_CpD-KNk3j_80TaR_euYt4wlme2LmSZNriYPVfE0vluRbX9F3C9Zgq3t6ZVMlZrhe_AAre16salMrxs_ILkjXt9PH-TpzT1USDYsZWo2rnV8Uy7Lt65m6i1Vr28icfrasMjsK_LoqJpRC8HWFdQXZ68h3E9TDCoTrAmBC4wgcYmZXosrkIC28jHYinWdMuDwrRkZOUhzX2kop6I9ucBx9DF9qw1F85Ic64MBWAPGP_KCOgy2r3zs-GlSO3bW-7Ohniz6ovdWMmvEkfkTxAk.',
      'X-Net-Core': 'crn',
      'X-B3-TraceId': 'f3935078b7c68881',
      'x-legacy-fid': '1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f',
      'Mode': 'rawIp',
      'x-legacy-sid': 'session.1659240762544937589578',
      'User-Agent': 'discover/7.49.3 (iPhone; iOS 16.0; Scale/2.00) Resolution/828*1792 Version/7.49.3 Build/7493005 Device/(Apple Inc.;iPhone11,8) NetType/WiFi',
      'xy-common-params': 'app_id=ECFAAF02&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&device_fingerprint=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_fingerprint1=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_model=phone&fid=1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f&identifier_flag=0&lang=en&launch_id=681226063&platform=iOS&project_id=ECFAAF&sid=session.1659240762544937589578&t=1659533295&teenager=0&tz=Asia/Shanghai&uis=light&version=7.49.3',
      'x-legacy-smid': '20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af',
      'x-mini-sig': '924d464e32a714c70cd4e62d713ccba686514f0d9d933d9151659a751d8b3b70',
      'shield': 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG43EKdeJWRKhKsYzG6LBuP52K/+lbz8Rercl+2aA6Fww9EWSAEr/92Shl8uOCd9nVITbk/Nu0zljqYrwS',
    });

    return data;
  }

  private static async getXuguanghan(): Promise<any> {
    const data = await NetworkUtil.get('https://edith.xiaohongshu.com/api/sns/v10/search/notes?allow_rewrite=1&api_extra=&geo=eyJsYXRpdHVkZSI6MzEuMjQ3MDM2Mjg3ODQ5NjksImxvbmdpdHVkZSI6MTIwLjY5NTkxODY4NjM0Mzd9&keyword=%E8%AE%B8%E5%85%89%E6%B1%89&loaded_ad=&location_permission=1&page=1&page_pos=0&page_size=20&recommend_info_extra=&scene=history&search_id=2afyz9kq8du3rpxmofo0r&session_id=2afyz8uihys62qxjij4if&sort=general&source=search_result_notes', {
      'Accept': ' */*',
      'Accept-Language': 'en-CN;q=1, zh-Hans-CN;q=0.9',
      'Accept-Encoding': 'br;q=1.0, gzip;q=1.0, compress;q=0.5',
      'xy-platform-info': 'platform=iOS&version=7.49.3&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&bundle=com.xingin.discover',
      'X-raw-ptr': '0',
      'xy-direction': '4',
      'x-legacy-did': '8D8FF69C-B094-4DA4-8287-C018F49535D7',
      'x-mini-mua': 'eyJhIjoiRUNGQUFGMDIiLCJjIjo2NSwiayI6IjZhM2QyN2E1NWE2YjFhODAyZTk2MzYzMjNkZGM1ZDllMGExY2JiZTQwNjNhZjA3NGRiZDU1ODQ5YTEyNzk1NzkiLCJwIjoiaSIsInMiOiIyMThkOTJiYjk1ZDdkZWEyNmQ5ODlhNjc0NTc2MDY1NiIsInUiOiIwMDAwMDAwMDE5NjdlYTYxNmUyYmM2ZWVhOTUwOGQ5ZmE2NjBmMmJjIiwidiI6IjEuMi4wIn0.o64FnlBI6T3Cq1yx6dq7wpxPCur8X4dZvlsgF67_8UcJw1GEw7W-kUyBHUBeHLjmbiCyiNZwhO666iVbYm7Bsm4B9Ktyuk4s8E3KiamgA-k2yLgqvDNrZNeVM_alNx79kriCGw5F2VJi9t2HlFvr_xgvzh19-3YiePbvJ14XUJZ2cO4IInBGu1Bpr1qfdYyrRdgN898YKTVF4kFz1HQFFTvXC3IVb4Ntid8ihCVnRnFjF-wwu_tJ5unt5gwsocu7tR3iBvdLV8Y7ePY_e7WfyLG46dsh4_7HY1kmitPEiFb4DM-_vBlgjUM-ilJoqdWE0kb17oXVzFWDmkLY-SeYL9wUZvhluRorhGf9Zm2dI_m7e89saHLEhILPbhgod-TI89k1-iiZbz018DfnMIY7c_8zH6YUcII2cUP3q-VTHWfKYrOReYYUMGMTeFB_C1mbbQQ8nF1c0wbpeoFJIXvesm1Be0JF2IlirvHuFSypdo0.',
      'X-Net-Core': 'crn',
      'X-B3-TraceId': 'bacd246cf8c4817b',
      'x-legacy-fid': '1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f',
      'Mode': 'rawIp',
      'x-legacy-sid': 'session.1659240762544937589578',
      'User-Agent': 'discover/7.49.3 (iPhone; iOS 16.0; Scale/2.00) Resolution/828*1792 Version/7.49.3 Build/7493005 Device/(Apple Inc.;iPhone11,8) NetType/WiFi',
      'xy-common-params': 'app_id=ECFAAF02&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&device_fingerprint=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_fingerprint1=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_model=phone&fid=1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f&identifier_flag=0&lang=en&launch_id=681222529&platform=iOS&project_id=ECFAAF&sid=session.1659240762544937589578&t=1659529742&teenager=0&tz=Asia/Shanghai&uis=light&version=7.49.3',
      'x-legacy-smid': '20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af',
      'x-mini-sig': '46439c644792f152882b4f5dab57c501cef097ed0f06d064ce08f1c3ebc03d06',
      'shield': 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG43EKdeJWRKhKsYzG6LBuP52K/+lbz8Rercl+2aA6Fww9EWSAEr/92Shl8uM0FGKKYicvTC/BZKOUODBn',
    });

    return data;
  }

  private static async getKongliu(): Promise<any> {
    const data = await NetworkUtil.get('https://edith.xiaohongshu.com/api/sns/v10/search/notes?allow_rewrite=1&api_extra=&geo=eyJsYXRpdHVkZSI6MzEuMjQ3MzE3OTUwNDE5OCwibG9uZ2l0dWRlIjoxMjAuNjk1NzM0Nzg2MDg0Mn0%3D&keyword=%E5%AD%94%E5%88%98&loaded_ad=&location_permission=1&page=1&page_pos=0&page_size=20&recommend_info_extra=&scene=&search_id=2afyzrllhqjt59tdgbzeh&session_id=2afyzr4zhrhf2xbtsbbg0&sort=general&source=nearby_feed', {
      'Accept': ' */*',
      'Accept-Language': 'en-CN;q=1, zh-Hans-CN;q=0.9',
      'Accept-Encoding': 'br;q=1.0, gzip;q=1.0, compress;q=0.5',
      'xy-platform-info': 'platform=iOS&version=7.49.3&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&bundle=com.xingin.discover',
      'X-raw-ptr': '0',
      'xy-direction': '4',
      'x-legacy-did': '8D8FF69C-B094-4DA4-8287-C018F49535D7',
      'x-mini-mua': 'eyJhIjoiRUNGQUFGMDIiLCJjIjo2MywiayI6IjQ0NDUzMzkzYTljZDMzYzgwNTMyMDY3OWFiNGQ2ZGI3ODhiNGQ3NzVjMjhhZGJlZDExMTQzYWVmYzEzNmQ2MTkiLCJwIjoiaSIsInMiOiIwNjBkNTg3ODdhNmU0ODIwOGM0YjE3NzE1ZmJkZTUxOCIsInUiOiIwMDAwMDAwMDE5NjdlYTYxNmUyYmM2ZWVhOTUwOGQ5ZmE2NjBmMmJjIiwidiI6IjEuMi4wIn0.rF8taj8YMZQgoc4UgBiCAnt4TpvTtcPN0f4mNpdRR5KJFyBFVAEENv-_5W5y6VAy7zrFK0WaxkpEeTgy411KOsI4zh_n3_8pX5JFaZY3x9PgPxBMIV0VfZ0AEaq5vOIeWaL5jGAqIZEET8hwLE6tzagLym7OVk2nTh-FlBuybbJdepo-t2VXoj8Dg7xDSxEzNv3lDkhGwRxyeTnXlU0ZtPCSCQLhqhyYFQKHpkqEX5oY1v23T3ISJwZMH8uscLaElLKWjahi6HRNAuXGR-qWUl0zftwCrACcteLB-ok29nCyeTt3R0uJoTyZoO_7x9kKbKc7Ge-CcNzO2lGSCeOV1LEEaksNSM3L_PbJ3Hz9JhOrpIzzG6FE_RuhKet_L-xJ65OKVflnW6PFD2QGaCSfIwid0K1EHv2HI8vlNH5--qP3Mm26AFXverEm9A_JNyCpNc5E1Ag8kS1FzPdoNSdAlw.',
      'X-Net-Core': 'crn',
      'X-B3-TraceId': '3abb533975394983',
      'x-legacy-fid': '1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f',
      'Mode': 'rawIp',
      'x-legacy-sid': 'session.1659240762544937589578',
      'User-Agent': 'discover/7.49.3 (iPhone; iOS 16.0; Scale/2.00) Resolution/828*1792 Version/7.49.3 Build/7493005 Device/(Apple Inc.;iPhone11,8) NetType/WiFi',
      'xy-common-params': 'app_id=ECFAAF02&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&device_fingerprint=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_fingerprint1=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_model=phone&fid=1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f&identifier_flag=0&lang=en&launch_id=681222749&platform=iOS&project_id=ECFAAF&sid=session.1659240762544937589578&t=1659529958&teenager=0&tz=Asia/Shanghai&uis=light&version=7.49.3',
      'x-legacy-smid': '20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af',
      'x-mini-sig': 'c4cadff45176c69d0d2731520a459c357d6906918cce3eabfad228e64082cf12',
      'shield': 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG43EKdeJWRKhKsYzG6LBuP52K/+lbz8Rercl+2aA6Fww9EWSAEr/92Shl8uPuM2dqoUjwNSPELQWd7qH5',
    });

    return data;
  }

  private static async getWangjiaer(): Promise<any> {
    const data = await NetworkUtil.get('https://edith.xiaohongshu.com/api/sns/v10/search/notes?allow_rewrite=1&api_extra=&geo=eyJsYXRpdHVkZSI6MzEuMjQ3Mjg3NjM4ODQ1MDksImxvbmdpdHVkZSI6MTIwLjY5NTY3MDg1NDIyODd9&keyword=%E7%8E%8B%E5%98%89%E5%B0%94&loaded_ad=&location_permission=1&page=1&page_pos=0&page_size=20&recommend_info_extra=&scene=confirm&search_id=2agqqh3l3082802u4uue7&session_id=2agqqgsxf7mokfvqs5s5z&sort=general&source=nearby_feed', {
      'Accept': ' */*',
      'Accept-Language': 'en-CN;q=1, zh-Hans-CN;q=0.9',
      'Accept-Encoding': 'br;q=1.0, gzip;q=1.0, compress;q=0.5',
      'xy-platform-info': 'platform=iOS&version=7.49.3&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&bundle=com.xingin.discover',
      'X-raw-ptr': '0',
      'xy-direction': '4',
      'x-legacy-did': '8D8FF69C-B094-4DA4-8287-C018F49535D7',
      'x-mini-mua': 'eyJhIjoiRUNGQUFGMDIiLCJjIjo3NCwiayI6IjYxYmQ0YmEyYWE2Y2UxNWM2MWNjODJlZjE4ZWRkMzBhM2FlYTk1YzFlNDc3NTM2MTFjYmUzOTI5Zjc5NmQzNmMiLCJwIjoiaSIsInMiOiJkNDM0MzA1NmMwNjM5ZDlmYTQwY2RiMjk3N2FlZWUyOSIsInUiOiIwMDAwMDAwMDE5NjdlYTYxNmUyYmM2ZWVhOTUwOGQ5ZmE2NjBmMmJjIiwidiI6IjEuMi4wIn0.0hCzDfTyZxouOshP4MuH-15HNCkMClxUbR4B4jX6satpJclnBEPMl19TuubVYgzKUyTQI7CH9DyNb7zakW3HVqi38GaeiTjiyKZnelj3xVdWEOncPFX_ankCirG0KFU2jS0wItM9URGEeNo3HTJyDIuaoR_WFEm0EMTSncGkUYtgqeQvRrrqh92l99zFOEqivRCmJlw8h_6CcgEFaNxwj98XPDnsjaD0W3fwvdmoy8deWHCXfQk3fhQ1T92LyTixhfInMAafc-GESaqT2q5nfxS5QTlxgqkHBtuSEdXlRnBPXQbbmwc3VSdgm5lE-ByTwOK3pkxsLePgKO_o3torvSyGqAKAoqJaImcPMpkPWcTfXnbhxpbAHOvODO1yHVIVy998nl7ix7DtRLrLctnZgZb9pqUZm-imI85Kn1thU_hYGnAc5u7fbxqgp-5-y0cmT_ALThcC7qi_YCYGVsuSLpFqFWsyi35Clfekoirv_b0.',
      'X-Net-Core': 'crn',
      'X-B3-TraceId': '29fed510c2e3dd5f',
      'x-legacy-fid': '1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f',
      'Mode': 'rawIp',
      'x-legacy-sid': 'session.1659240762544937589578',
      'User-Agent': 'discover/7.49.3 (iPhone; iOS 16.0; Scale/2.00) Resolution/828*1792 Version/7.49.3 Build/7493005 Device/(Apple Inc.;iPhone11,8) NetType/WiFi',
      'xy-common-params': 'app_id=ECFAAF02&build=7493005&deviceId=8D8FF69C-B094-4DA4-8287-C018F49535D7&device_fingerprint=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_fingerprint1=20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af&device_model=phone&fid=1659239108-0-0-5d8e71f2e1fe243935a12882bd8f489f&identifier_flag=0&lang=en&launch_id=681653634&platform=iOS&project_id=ECFAAF&sid=session.1659240762544937589578&t=1659960841&teenager=0&tz=Asia/Shanghai&uis=light&version=7.49.3',
      'x-legacy-smid': '20220731114514d060445cca29fecebd0347f7481be55401e36f097a0710af',
      'x-mini-sig': 'bb15ae11e6ced970bfd06b99c673d0c2393822863584e78109e4db863233926b',
      'shield': 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG43EKdeJWRKhKsYzG6LBuP52K/+lbz8Rercl+2aA6Fww9EWSAEr/92Shl8uOF8ecOmpjjdU5YZdIdBRUB',
    });

    return data;
  }

  private static async extractNote(data: any, bot: WechatyInterface): Promise<UrlLink | undefined> {
    const items = arrayShuffle(data.data.items);
    const item = items.find(function(item) {
      return (item as any).model_type == 'note';
    });

    if (item == undefined) {
      return undefined;
    }

    const note = (item as any).note;
    return new bot.UrlLink({
      description: `${note.desc}`,
      thumbnailUrl: `${note.images_list[0].url}`,
      title: `${note.title}`,
      url: `https://www.xiaohongshu.com/discovery/item/${note.id}`,
    });
  }
}
