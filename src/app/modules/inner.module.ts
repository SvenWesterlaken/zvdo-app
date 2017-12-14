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
import {UserModule} from "./user.module";
import {UserRoutingModule} from "../routes/user.routing.module";
import {UserService} from "../services/user.service";
import {HeaderComponent} from "../components/header/header.component";
import {MatIconModule} from "@angular/material";
import {InnerComponent} from "../components/inner/inner.component";

moment.locale('nl-nl');

@NgModule({
  declarations: [
    InnerComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    MeetingModule,
    PoolModule,
    UserModule,
    MeetingRoutingModule,
    PoolRoutingModule,
    UserRoutingModule,
    MatIconModule
  ],
  exports: [
    InnerComponent
  ],
  providers: [
    MeetingService,
    PoolService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})

export class InnerModule { }
