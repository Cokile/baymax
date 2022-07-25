import axios, {AxiosRequestHeaders} from 'axios';

export default class NetworkUtil {
  static async get(url: string, headers?: AxiosRequestHeaders): Promise<any | undefined> {
    try {
      const response = await axios.get(url, {headers: headers});
      if (response.status == 200) {
        response.data;
        return response.data;
      } else {
        return undefined;
      }
    } catch {
      return undefined;
    }
  }
}
