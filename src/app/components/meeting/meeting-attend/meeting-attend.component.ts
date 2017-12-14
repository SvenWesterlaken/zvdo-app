import {Component, OnInit, ViewChild} from '@angular/core';
import {MeetingService} from '../../../services/meeting.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Meeting} from '../../../models/meeting';

@Component({
  selector: 'app-meeting-attend',
  templateUrl: './meeting-attend.component.pug',
  styleUrls: ['./meeting-attend.component.css']
})
export class MeetingAttendComponent implements OnInit {
  @ViewChild('heats') heats;

  private sub: Subscription;
  private meeting: Meeting;

  constructor(private meetingService: MeetingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.meetingService.get(id).then((meeting: Meeting) => {
        this.meeting = meeting;
      });
    });
  }

  attend() {

    const selected = {
      heats: this.heats.selectedOptions.selected.map((item) => {
        const content = item._element.nativeElement.textContent;
        return content.substring(1, content.indexOf(')'));
      })
    };

    this.meetingService.attend(this.meeting._id, selected).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
