import {NgModule} from '@angular/core';
import {UserDetailComponent} from '../components/user/user-detail/user-detail.component';
import {UserEditComponent} from '../components/user/user-edit/user-edit.component';
import {SharedModule} from './shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../routes/app.routing.module';
import {MatIconModule, MatInputModule, MatListModule, MatSelectModule} from "@angular/material";
import {MomentModule} from "angular2-moment";
import {MarkdownModule} from "angular2-markdown";
import {UserComponent} from "../components/user/user.component";

@NgModule({
  declarations: [
    UserComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MomentModule,
    MatSelectModule,
    MatInputModule,
    MarkdownModule,
    FormsModule
  ]
})
export class UserModule {}
