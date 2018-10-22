import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Router} from '@angular/router';


@Injectable()
export class HttpService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  get(url: string, params?: {}): Observable<any> {
    return this.http
      .get(url, {
        withCredentials: true,
        params: params
      }).pipe();
    // .catch((err: HttpErrorResponse) => {
    //   return Observable.throw(this.errorHandler(err));
    // });
  }

  post(url: string, data: any): Observable<any> {
    console.log(url, data);
    return this.http
      .post(url, data, {withCredentials: true})
      .pipe(
      );
  }

  patch(url: string, data: any): Observable<any> {
    return this.http
      .patch(url, data, {
        withCredentials: true
      });
    // .catch((err: HttpErrorResponse) => {
    //   return Observable.throw(this.errorHandler(err));
    // });
  }

  delete(url: string) {
    return this.http
      .delete(url, {
        withCredentials: true
      });
  }

  //
  private errorHandler(err: HttpErrorResponse): string {
    if (err.status === 401) {
      this.router.navigateByUrl('/').then(() => {
      });
    } else if (err.status === 403) {
      this.router.navigateByUrl('/').then(() => {
      });
    } else if (err.status >= 500 || err.status === 0) {
      // https://github.com/angular/angular/issues/10343 有时候遇到跨域问题或者没有返回结果会是0
      // this.commonUtilsService.showErrorMessage('网络错误，请检查网络或稍后再尝试');
    }
    return err.error.message;
  }
}
