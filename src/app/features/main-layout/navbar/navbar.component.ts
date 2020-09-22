import { Component, OnInit } from '@angular/core';
import * as CONST from '../../../core/constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routing = CONST.frontendUrl;
  user = true;
  constructor() { }

  ngOnInit(): void {
  }

}
