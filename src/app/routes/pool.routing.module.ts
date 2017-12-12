import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeetingComponent} from '../components/meeting/meeting.component';
import {MeetingDetailComponent} from '../components/meeting/meeting-detail/meeting-detail.component';
import {MeetingCreateComponent} from "../components/meeting/meeting-create/meeting-create.component";
import {MeetingContainerComponent} from "../components/meeting/meeting-container/meeting-container.component";
import {MeetingEditComponent} from "../components/meeting/meeting-edit/meeting-edit.component";
import {PoolCreateComponent} from "../components/pool/pool-create/pool-create.component";
import {PoolEditComponent} from "../components/pool/pool-edit/pool-edit.component";
import {PoolContainerComponent} from "../components/pool/pool-container/pool-container.component";
import {PoolDetailComponent} from "../components/pool/pool-detail/pool-detail.component";

const routes: Routes = [
  { path: 'zwembaden/aanmaken', component: PoolCreateComponent },
  { path: 'zwembaden/:id/bewerken', component: PoolEditComponent },
  { path: 'zwembaden', component: PoolContainerComponent, children: [
    { path: ':id', component: PoolDetailComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PoolRoutingModule {}
