import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './routes/app.routing.module';
import {OuterComponent} from './components/outer/outer.component';
import {AuthService} from './services/auth.service';
import {RegisterComponent} from './components/register/register.component';
import 'materialize-css';
import {ReactiveFormsModule} from '@angular/forms';
import {InnerModule} from './modules/inner.module';
import {InnerComponent} from './components/inner/inner.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule, MatIconRegistry} from '@angular/material';
import {SharedModule} from "./modules/shared.module";
import {OuterModule} from "./modules/outer.module";
import { MeetingAttendComponent } from './components/meeting/meeting-attend/meeting-attend.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    InnerModule,
    OuterModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
  }

}
