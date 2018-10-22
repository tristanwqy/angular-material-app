import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {HttpService} from '../../core/http.service';
import {UrlConstant} from '../../core/url.constant';

@Injectable()
export class UserService {

  private _userList$: BehaviorSubject<any>;

  constructor(private httpService: HttpService) {
    this._userList$ = new BehaviorSubject<any>([]);
  }

  getAllUsers() {
    return this.httpService.get(UrlConstant.USER_LIST);
  }

  deleteUser(userId) {
    return this.httpService.delete(UrlConstant.USER(userId));
  }

}
