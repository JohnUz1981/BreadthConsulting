import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SegregatedwhysInputs } from './segregatedwhys-class';


@Injectable({
  providedIn: 'root'
})
export class SegregateServiceService {

  public segregatedwhysdata = new BehaviorSubject<SegregatedwhysInputs>({
    currentDate1:'',
    clientName1:'',
    advisors1:'',
    carrier:'',
    selectedCarrier:'',
    checked:'',
    indeterminate: '',
    disabled:'',
    salescharge:'',
    selectedCharge:'',
    amount:'',
    amountSelect:'',
    maturity:'',
    selectedMaturity:'',
    deathPercentage:'',
    selectedDeathPercentage:''
});
  constructor() {
    //console.log("service call");
    //this.segregatedwhysdata.subscribe(console.log);
   }

   getSegregatedFundResults(){
      //console.log("service is calling");
      return this.segregatedwhysdata.asObservable();
    }
}
