import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './routes/app.routing.module';
import { OuterComponent } from './components/outer/outer.component';
import {AuthService} from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';
import {ReactiveFormsModule} from '@angular/forms';
import {InnerModule} from './modules/inner.module';
import {InnerComponent} from './components/inner/inner.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatIconModule, MatIconRegistry, MatButtonModule } from '@angular/material';
import { MeetingItemComponent } from './components/meeting/meeting-list/meeting-item/meeting-item.component';
import { MeetingCreateComponent } from './components/meeting/meeting-create/meeting-create.component';
import { MeetingContainerComponent } from './components/meeting/meeting-container/meeting-container.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InnerComponent,
    HeaderComponent,
    OuterComponent,
    RegisterComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InnerModule,
    MatIconModule
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
