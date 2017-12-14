import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MeetingService} from '../../../services/meeting.service';
import {AuthService} from '../../../services/auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.pug',
  styleUrls: ['./meeting-list.component.sass']
})
export class MeetingListComponent implements OnInit, OnDestroy {
  private subGet: Subscription;
  private meetings;

  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
    this.subGet = this.meetingService.getArray().subscribe((meetings) => {
      this.meetings = meetings;
    });
  }

  ngOnDestroy() {
    this.subGet.unsubscribe();
  }

  hasMeetings(): boolean {
    return !_.isEmpty(this.meetings);
  }

}
