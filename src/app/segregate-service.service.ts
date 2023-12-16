import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SegregatedwhysInputs } from './segregatedwhys-class';


@Injectable({
  providedIn: 'root'
})
export class SegregateServiceService {

  public segregatedwhysdata = new BehaviorSubject<SegregatedwhysInputs>({
    currentDate:'',
    clientName:'',
    advisors:'',
    carrier:'',
    selectedCarrier:'',
    checked:'',
    indeterminate: '',
    disabled:'',
    salescharge:'',
    selectedCharge:'',
    investmentPurpose:'',
    investmentPurposeSelect:'',
    amount:'',
    amountSelect:'',
    maturity:'',
    selectedMaturity:'',
    deathPercentage:'',
    selectedDeathPercentage:'',
    commissionPercent:'',
    risktolerance:'',
    risktoleranceSelect:'',
});
  constructor() {
    console.log("service call");
    this.segregatedwhysdata.subscribe(console.log);
   }

   getSegregatedFundResults(){
      //console.log("service is calling");
      return this.segregatedwhysdata;
    }
}
