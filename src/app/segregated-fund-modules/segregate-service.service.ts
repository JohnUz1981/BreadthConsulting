import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SegregatedwhysInputs } from './segregatedwhys-class';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SegregateServiceService {
  postSegregatedFundResults(segData: SegregatedwhysInputs | undefined) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://localhost:7284/api/SegFund';

  public segregatedwhysdata = new BehaviorSubject<SegregatedwhysInputs>({
    id: undefined,
    currentDate:'',
    clientName:'',
    advisors:'',
    carrier:'',
    selectedCarrier:'',
    aggreeToSegFundchecked:'',
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
    selectedTimeHorizon:'',
    purchaseVerificationCheckbox:'',
    OtherInvestmentPurpose:'',
});
  constructor(private http: HttpClient) {
    console.log("service call");
    this.segregatedwhysdata.subscribe(console.log);
   }

   getSegregatedFundResults(){
      //console.log("service is calling");
      return this.segregatedwhysdata;
    }

    sendSegFundDataToDb(data: any) : Observable<any>{
      return this.http.post<any>(`${this.apiUrl}/PostSegFundData`, data);
    }
}
