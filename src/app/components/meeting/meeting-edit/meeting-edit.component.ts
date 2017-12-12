import {Component, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MeetingService} from '../../../services/meeting.service';
import {Meeting} from '../../../models/meeting';
import * as moment from 'moment';

@Component({
  selector: 'app-meeting-edit',
  templateUrl: './meeting-edit.component.pug',
  styleUrls: ['./meeting-edit.component.sass']
})
export class MeetingEditComponent implements OnInit {
  editMeetingForm: FormGroup;
  private eventSize;

  constructor(private meetingService: MeetingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editMeetingForm = new FormGroup({
      '_id': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null),
      'events': new FormArray([])
    });

    this.meetingService.get(this.route.snapshot.params['id']).then((meeting: Meeting) => {
      const events = meeting.schedule.events;
      const dateParsed = moment(meeting.date);

      this.eventSize = events.length;

      this.editMeetingForm.setValue({
        _id: meeting._id,
        title: meeting.title,
        date: dateParsed.format('D MMMM, YYYY'),
        time: dateParsed.format('HH:mm'),
        events: []
      });

      events.forEach((event, i) => {
        (<FormArray> this.editMeetingForm.get('events')).push(new FormGroup({
            'heat': new FormControl(i + 1, Validators.required),
            'length': new FormControl(event.length, Validators.required),
            'stroke': new FormControl(event.stroke, Validators.required),
            'gender': new FormControl(event.gender, Validators.required),
            'min_category': new FormControl(event.min_category, Validators.required),
            'max_category': new FormControl(event.max_category, Validators.required)
          })
        );
      });


    });



  }

  updateMeeting() {
    const values = this.editMeetingForm.value;

    const meeting = {
      _id: values._id,
      title: values.title,
      date: new Date(`${values.date} ${values.time}`),
      schedule: {
        events: values.events
      }
    };

    this.meetingService.update(meeting).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    }, (err) => console.log(err));

  }

  removeEvent(i: number) {
    if (this.eventSize > 1) {
      this.eventSize--;

      (<FormArray> this.editMeetingForm.get('events')).removeAt(i);
    }
  }

  addEvent() {
    this.eventSize++;

    (<FormArray> this.editMeetingForm.get('events')).push(new FormGroup({
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
