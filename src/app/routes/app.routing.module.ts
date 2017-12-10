import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from '../components/home/home.component';
import {MeetingComponent} from "../components/meeting/meeting.component";
import {PoolComponent} from "../components/pool/pool.component";
import {UserComponent} from "../components/user/user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zwembaden', component: PoolComponent },
  { path: 'profiel', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
