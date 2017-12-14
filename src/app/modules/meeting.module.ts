import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetingListComponent} from "../components/meeting/meeting-list/meeting-list.component";
import {MeetingDetailComponent} from "../components/meeting/meeting-detail/meeting-detail.component";
import {MeetingComponent} from "../components/meeting/meeting.component";
import {MatIconModule, MatButtonModule, MatSelectModule, MatListModule} from '@angular/material';
import {SharedModule} from "./shared.module";
import {MeetingItemComponent} from "../components/meeting/meeting-list/meeting-item/meeting-item.component";
import {MeetingContainerComponent} from "../components/meeting/meeting-container/meeting-container.component";
import {MeetingCreateComponent} from "../components/meeting/meeting-create/meeting-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MeetingEditComponent} from "../components/meeting/meeting-edit/meeting-edit.component";
import {MeetingAttendComponent} from "../components/meeting/meeting-attend/meeting-attend.component";
import {IfEmptyArrayDirective} from "../directives/array.directive";

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingListComponent,
    MeetingDetailComponent,
    MeetingItemComponent,
    MeetingCreateComponent,
    MeetingContainerComponent,
    MeetingEditComponent,
    MeetingAttendComponent
  ],
  imports: [
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    IfEmptyArrayDirective
  ]
})
export class MeetingModule { }
