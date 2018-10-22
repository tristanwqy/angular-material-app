import {environment} from '../../environments/environment';

export class UrlConstant {
  public static SERVER_URL = 'http://localhost:8080/api';

  public static USER_LIST = UrlConstant.SERVER_URL + '/users';

  public static USER(userId: number) {
    return `${UrlConstant.USER_LIST}/${userId}`;
  }

}
