import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {SegregatedwhysClass} from '../segregatedwhys-class';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public segregatedwhysdata = new BehaviorSubject<SegregatedwhysClass>(
      {advisors: '',
      selectedAdvisor:'',
      carrier:  '',
      selectedCarrier:'',
      checked:  '',
      indeterminate: '',
      disabled:  '',
      salescharge: '',
      selectedCharge:'',
      amount: '',
      amountSelect: '',
      maturity: '',
      selectedMaturity: '',
      deathPercentage: '',
      selectedDeathPercentage: '',
});
getSegregateData(){
  return this.segregatedwhysdata.asObservable();
}

  userinfo: any = './json/users.json';
  carrier: any = './json/carriers.json';
  salescharge: any = './json/salescharge.json';
  amount: any = './json/amounts.json';
  maturity: any = './json/maturitydate.json';
  deathpercentage: any = './json/percent.json';

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
  getMaturityDate() {
    return this.http.get(this.maturity);
  }
  getDeathPercent() {
    return this.http.get(this.deathpercentage);
  }



}
