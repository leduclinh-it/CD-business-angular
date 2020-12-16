import { Component, OnInit } from '@angular/core';
import * as CONST from '../../../core/constants';
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routing = CONST.frontendUrl;
  user;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userCurrent.subscribe(value => this.user = value);
    if (!this.user) {
      this.user = this.authService.getLocalStorage(CONST.LocalStorage.USER_INFO);
    }
  }
  onLogout() {
    this.authService.onLogout(CONST.LocalStorage.USER_INFO);
  }
}
