import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-meeting-container',
  templateUrl: './meeting-container.component.pug',
  styleUrls: ['./meeting-container.component.sass']
})
export class MeetingContainerComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
