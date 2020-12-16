import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import * as CONST from '../constants';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public userCurrent = new BehaviorSubject(null);
  protected baseUrl = environment.backend_url;
  constructor(protected http: HttpClient, private router: Router) { }

  get(url: string): Observable<any> {
    return this.http.get(this.baseUrl+url);
  }
  post(url: string, request: any): Observable<any> {
    return  this.http.post(this.baseUrl+url, request);
  }
  saveLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    if (key === CONST.LocalStorage.USER_INFO) {
      this.userCurrent.next(JSON.parse(localStorage.getItem(key)))
    }
  }
  getLocalStorage(key: string): any{
    return JSON.parse(localStorage.getItem(key));
  }
  onLogout(key: string) {
    localStorage.removeItem(key);
    this.userCurrent.next(null);
    return this.router.navigate([CONST.frontendUrl.AUTH + '/' + CONST.frontendUrl.LOGIN]);
  }

}
