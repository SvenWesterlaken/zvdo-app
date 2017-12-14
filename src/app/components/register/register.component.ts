import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerFormName: FormGroup;
  registerFormCredentials: FormGroup;
  registerFormOther: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerFormName = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required)
    });

    this.registerFormCredentials = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

    this.registerFormOther = new FormGroup({
      birth: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required)
    });
  }

  register() {
    console.log();
    console.log();
    console.log();

    const user = {
      email: this.registerFormCredentials.value.email,
      password: this.registerFormCredentials.value.password,
      firstname: this.registerFormName.value.firstname,
      lastname: this.registerFormName.value.lastname,
      gender: this.registerFormOther.value.gender,
      birth: new Date(this.registerFormOther.value.birth)
    };

    console.log(user);


    this.auth.register(user).subscribe((res) => {
      this.router.navigate(['/'], { fragment: 'inloggen'});
    }, err => console.log(err));
  }

}
