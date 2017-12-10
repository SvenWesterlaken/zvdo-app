import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'keepLoggedIn': new FormControl(null)
    });

    this.loginForm.patchValue({
      'keepLoggedIn': false
    });
  }

  login() {
    const values = this.loginForm.value;
    this.auth.login(values.email, values.password, values.keepLoggedIn);
  }



}
