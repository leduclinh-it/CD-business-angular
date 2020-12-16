import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {Observable} from "rxjs";
import * as CONST from '../constants';
import {CreateBookingModel} from "../models/create-booking.model";
@Injectable({
  providedIn: 'root'
})
export class BookingService extends CommonService{

  createBooking(createBooking: CreateBookingModel):Observable<any> {
    return this.post(CONST.ApiUrl.EMPLOYEE.CREATE_BOOKING, createBooking);
  }
}
