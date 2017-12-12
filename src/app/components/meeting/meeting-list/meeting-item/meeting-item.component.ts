import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from '../../../../models/meeting';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.pug',
  styleUrls: ['./meeting-item.component.sass']
})
export class MeetingItemComponent {
  @Input() meeting: Meeting;
}
