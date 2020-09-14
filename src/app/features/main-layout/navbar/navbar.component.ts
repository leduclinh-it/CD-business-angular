import { Component, OnInit } from '@angular/core';
import * as CONST from '../../../core/constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  basicUrl = CONST.frontendUrl;
  dashboardUrl = this.basicUrl.DASHBOARD;
  customerUrl = this.basicUrl.CUSTOMER_MANAGER;
  sellingUrl = this.basicUrl.SELLING;
  cdManagerUrl = this.basicUrl.CD_MANAGER;
  userUrl = this.basicUrl.USER_MANAGER;
  constructor() { }

  ngOnInit(): void {
  }

}
