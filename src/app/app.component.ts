import { Component } from '@angular/core';
import {Router} from "@angular/router";
import * as CONST from "./core/constants";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUrl = '';
  isLogin: boolean;
  private basic_pages: any[] = [
    `/${CONST.frontendUrl.AUTH}/${CONST.frontendUrl.LOGIN}`,
    `/${CONST.frontendUrl.AUTH}/${CONST.frontendUrl.REGISTER}`,
    '/'
  ];
  constructor(private router: Router) {
    this.router.events.subscribe((route: any) => {
      if (route.routerEvent) {
        this.currentUrl = route.routerEvent.url;
      } else {
        this.currentUrl = route.url;
      }
      this.isLogin = this.basic_pages.indexOf(this.currentUrl) == -1;
    })
  }
}
