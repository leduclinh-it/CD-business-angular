import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error = false;
  loginSuccess = false;
  constructor(private router: Router,
              private fb: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get username() {return this.loginForm.get('username'); }
  get password() {return this.loginForm.get('password'); }

  onLogin() {
    let loginReq: any = {
      email: this.username.value,
      password: this.password.value
    }
    this.loading = true;

  }
  getUserInfo() {

  }

}
