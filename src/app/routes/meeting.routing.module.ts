import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeetingComponent} from '../components/meeting/meeting.component';
import {MeetingDetailComponent} from '../components/meeting/meeting-detail/meeting-detail.component';
import {MeetingCreateComponent} from "../components/meeting/meeting-create/meeting-create.component";
import {MeetingContainerComponent} from "../components/meeting/meeting-container/meeting-container.component";
import {MeetingEditComponent} from "../components/meeting/meeting-edit/meeting-edit.component";
import {MeetingAttendComponent} from "../components/meeting/meeting-attend/meeting-attend.component";

const routes: Routes = [
  { path: 'wedstrijden/aanmaken', component: MeetingCreateComponent },
  { path: 'wedstrijden/:id/bewerken', component: MeetingEditComponent },
  { path: 'wedstrijden/:id/inschrijven', component: MeetingAttendComponent },
  { path: 'wedstrijden', component: MeetingContainerComponent, children: [
    { path: ':id', component: MeetingDetailComponent }
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
export class MeetingRoutingModule {}
