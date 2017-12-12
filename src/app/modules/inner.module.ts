import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../services/auth.interceptor';
import {UserComponent} from '../components/user/user.component';
import {HomeComponent} from '../components/home/home.component';
import {MeetingService} from '../services/meeting.service';
import {MeetingModule} from './meeting.module';
import {SharedModule} from './shared.module';
import {MeetingRoutingModule} from '../routes/meeting.routing.module';
import * as moment from 'moment';
import 'moment/min/locales';
import {PoolRoutingModule} from '../routes/pool.routing.module';
import {PoolModule} from './pool.module';
import {PoolService} from '../services/pool.service';

moment.locale('nl-nl');

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    MeetingModule,
    PoolModule,
    MeetingRoutingModule,
    PoolRoutingModule
  ],
  providers: [
    MeetingService,
    PoolService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})

export class InnerModule { }
