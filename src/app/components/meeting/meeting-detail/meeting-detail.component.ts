import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MeetingService} from '../../../services/meeting.service';
import {Meeting} from '../../../models/meeting';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.pug',
  styleUrls: ['./meeting-detail.component.css']
})
export class MeetingDetailComponent implements OnInit {
  meeting: Meeting;

  constructor(private meetingService: MeetingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.meetingService.getMeeting(id).then((meeting: Meeting) => {
        this.meeting = meeting;
      });
    });

  }

}
