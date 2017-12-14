import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user';
import * as moment from "moment";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.pug',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  description;
  editUserForm: FormGroup;
  user: User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editUserForm = new FormGroup({
      _id: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      birth: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });

    this.userService.get().then((user: User) => {
      this.editUserForm.patchValue({
        _id: user._id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        birth: moment(user.birth).format('D MMMM, YYYY'),
        gender: user.gender,
        description: user.description
      });
    });
  }

  updateUser() {
    this.userService.update(this.editUserForm.value).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    }, (err) => console.log(err));
  }

}
