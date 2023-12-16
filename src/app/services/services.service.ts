import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient ){}

  userinfo: any = './json/users.json';
  carrier: any = './json/carriers.json';
  salescharge: any = './json/salescharge.json';
  amount: any = './json/amounts.json';
  maturity: any = './json/maturitydate.json';
  deathpercentage: any = './json/percent.json';
  investmentpurpose: any = './json/investmentpurpose.json';
  risktolerance: any = './json/risktolerance.json';

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
  getInvestmentPurpose(){
    return this.http.get(this.investmentpurpose);
  }

  getRisktolerance(){
    return this.http.get(this.risktolerance);
  }
}
