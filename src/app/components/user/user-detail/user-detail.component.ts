import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.pug',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.get().then((user: User) => { this.user = user; });
  }

}
