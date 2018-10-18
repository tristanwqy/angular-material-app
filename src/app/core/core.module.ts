import {NgModule} from '@angular/core';

import {AuthService} from './auth.service';
import {ConfigService} from './config.service';
import {HttpService} from './http.service';

@NgModule({
  providers: [AuthService, ConfigService, HttpService]
})
export class CoreModule {
}
