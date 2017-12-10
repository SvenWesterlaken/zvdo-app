import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MeetingService} from '../../../services/meeting.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.pug',
  styleUrls: ['./meeting-list.component.sass']
})
export class MeetingListComponent implements OnInit {
  private subGet: Subscription;
  private meetings;

  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
    this.subGet = this.meetingService.getMeetings().subscribe((meetings) => {
      this.meetings = meetings;
    });
  }

}
