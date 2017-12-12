import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, RouterLinkActive} from '@angular/router';
import {MeetingService} from '../../../services/meeting.service';
import {Meeting} from '../../../models/meeting';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.pug'
})
export class MeetingDetailComponent implements OnInit, OnDestroy {
  private meeting: Meeting;
  private sub: Subscription;

  constructor(private meetingService: MeetingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.meetingService.get(id).then((meeting: Meeting) => {
        this.meeting = meeting;
      });
    });

  }

  removeMeeting(id: string) {
    this.meetingService.remove(id).subscribe((res) => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}