import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  userinfo: any = './json/users.json';
  carrier: any = './json/carriers.json';
  salescharge: any = './json/salescharge.json';
  amount: any = './json/amounts.json';

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get(this.userinfo);
  }

  getCarrier() {
    return this.http.get(this.carrier);
  }

  getSalesCharge() {
    return this.http.get(this.salescharge);
  }

  getAmounts() {
    return this.http.get(this.amount);
  }
}
