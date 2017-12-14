import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Meeting} from '../../../models/meeting';
import { Event } from '../../../models/event';
import {Schedule} from '../../../models/schedule';
import {MeetingService} from '../../../services/meeting.service';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {Pool} from "../../../models/pool";
import {PoolService} from "../../../services/pool.service";
import {MatSelectModule} from "@angular/material";

@Component({
  selector: 'app-meeting-create',
  templateUrl: './meeting-create.component.pug',
  styleUrls: ['./meeting-create.component.sass']
})
export class MeetingCreateComponent implements OnInit {
  newMeetingForm: FormGroup;
  pools: Pool[];
  private eventSize;

  constructor(private meetingService: MeetingService, private router: Router, private route: ActivatedRoute, private poolService: PoolService) { }

  ngOnInit() {
    this.eventSize = 1;

    this.newMeetingForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null),
      'pool': new FormControl(null),
      'events': new FormArray([
        new FormGroup({
          'heat': new FormControl(this.eventSize, Validators.required),
          'length': new FormControl(null, Validators.required),
          'stroke': new FormControl(null, Validators.required),
          'gender': new FormControl(null, Validators.required),
          'min_category': new FormControl(1, Validators.required),
          'max_category': new FormControl(1, Validators.required)
        })
      ])
    });

    this.poolService.getArray().subscribe((pools: Pool[]) => {
      this.pools = pools;
    });

  }

  newMeeting() {
    const values = this.newMeetingForm.value;

    const meeting = {
      title: values.title,
      date: new Date(`${values.date} ${values.time}`),
      pool: values.pool,
      schedule: {
        events: values.events
      }
    };

    this.meetingService.create(meeting).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    }, (err) => console.log(err));

  }

  removeEvent(i: number) {
    if (this.eventSize > 1) {
      this.eventSize--;

      (<FormArray> this.newMeetingForm.get('events')).removeAt(i);
    }
  }

  addEvent() {
    this.eventSize++;

    (<FormArray> this.newMeetingForm.get('events')).push(new FormGroup({
        'heat': new FormControl(this.eventSize, Validators.required),
        'length': new FormControl(null, Validators.required),
        'stroke': new FormControl(null, Validators.required),
        'gender': new FormControl(null, Validators.required),
        'min_category': new FormControl(1, Validators.required),
        'max_category': new FormControl(1, Validators.required)
      })
    );
  }

}
