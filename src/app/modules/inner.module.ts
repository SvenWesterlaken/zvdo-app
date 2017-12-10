import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../services/auth.interceptor';
import {MeetingComponent} from '../components/meeting/meeting.component';
import {InnerComponent} from '../components/inner/inner.component';
import {PoolComponent} from '../components/pool/pool.component';
import {UserComponent} from '../components/user/user.component';
import {HomeComponent} from '../components/home/home.component';
import {RouterModule} from '@angular/router';
import {MeetingService} from '../services/meeting.service';
import {MeetingModule} from './meeting.module';
import {SharedModule} from './shared.module';
import {MeetingRoutingModule} from '../routes/meeting.routing.module';
import {MomentModule} from 'angular2-moment';
import * as moment from 'moment';
import 'moment/min/locales';

moment.locale('nl-nl');

@NgModule({
  declarations: [
    PoolComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    MeetingModule,
    MeetingRoutingModule,
  ],
  providers: [
    MeetingService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})

export class InnerModule { }
