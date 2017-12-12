import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetingListComponent} from "../components/meeting/meeting-list/meeting-list.component";
import {MeetingDetailComponent} from "../components/meeting/meeting-detail/meeting-detail.component";
import {MeetingComponent} from "../components/meeting/meeting.component";
import { MatIconModule, MatButtonModule } from '@angular/material';
import {SharedModule} from "./shared.module";
import {MeetingItemComponent} from "../components/meeting/meeting-list/meeting-item/meeting-item.component";
import {MeetingContainerComponent} from "../components/meeting/meeting-container/meeting-container.component";
import {MeetingCreateComponent} from "../components/meeting/meeting-create/meeting-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MeetingEditComponent} from "../components/meeting/meeting-edit/meeting-edit.component";

@NgModule({
  declarations: [
    MeetingComponent,
    MeetingListComponent,
    MeetingDetailComponent,
    MeetingItemComponent,
    MeetingCreateComponent,
    MeetingContainerComponent,
    MeetingEditComponent
  ],
  imports: [
    SharedModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class MeetingModule { }
