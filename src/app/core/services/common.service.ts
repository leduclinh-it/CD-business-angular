import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  protected baseUrl = environment.backend_url;
  constructor(protected http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(this.baseUrl+url);
  }
  pos(url: string, request: any): Observable<any> {
    return  this.http.post(this.baseUrl+url, request);
  }
  saveLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalStorage(key: string): any{
    return JSON.parse(localStorage.getItem(key));
  }

}
