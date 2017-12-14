import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserDetailComponent} from '../components/user/user-detail/user-detail.component';
import {UserEditComponent} from '../components/user/user-edit/user-edit.component';
import {UserComponent} from "../components/user/user.component";

const routes = [
  { path: 'profiel', component: UserComponent, children: [
    { path: 'wijzigen', component: UserEditComponent },
    { path: '', component: UserDetailComponent }
  ]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
