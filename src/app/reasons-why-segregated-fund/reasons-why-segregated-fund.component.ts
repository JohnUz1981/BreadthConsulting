import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as jsPDF from 'jspdf';
import { ServicesService } from '../services/services.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {SegregatedwhysInputs} from '../segregatedwhys-class'
import { SegregateServiceService } from '../segregate-service.service';



interface Advisor {
  name: string;
  value: any; 
  viewValue: string;
}

interface Carrier {
  name: any;
  value: string;
  viewValue: string;
}

interface SalesCharge {
  salescharge: string;
}
interface Amounts {
  amount: string;
}
interface Maturity{
  maturityDate: any;
}
interface InvestmentPurpose{
  name: string;
  value: any; 
  viewValue: string;
}
interface Risktolerance{
  name: string;
  value: any; 
  viewValue: string;
}
interface TimeHorizon{
  name: string;
  value: any; 
  viewValue: string;
}

@Component({
  providers: [],
  selector: 'app-reasons-why-segregated-fund',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './reasons-why-segregated-fund.component.html',
  styleUrls: ['./reasons-why-segregated-fund.component.css']
})

export class ReasonsWhySegregatedFundComponent implements OnInit {
SegregatedFundFormValidation: any;
  log(x: any){
    console.log(x)
  }

  constructor(private segService: SegregateServiceService, private http: HttpClient, private ServicesService: ServicesService,
    private _formBuilder: FormBuilder, private router: Router) {

  }
   
  inputClass: SegregatedwhysInputs = {
    currentDate:'',
    clientName:'',
    advisors:'',
    carrier:'',
    selectedCarrier:'',
    aggreeToSegFundchecked:'',
    indeterminate: '',
    disabled:'',
    salescharge:'',
    investmentPurpose:'',
    investmentPurposeSelect:'',
    commissionPercent:'',
    selectedCharge:'',
    amount:'',
    amountSelect:'',
    maturity:'',
    selectedMaturity:'',
    deathPercentage:'',
    selectedDeathPercentage:'',
    risktolerance:'',
    risktoleranceSelect:'',
    selectedTimeHorizon:'',
    purchaseVerificationCheckbox:'',
    OtherInvestmentPurpose:'',
    
  };



  currentDate:string | undefined
  clientName: string | undefined;
  advisors: Advisor[] = [];
  selectedAdvisor: string | undefined;
  carrier: Carrier[] = [];
  selectedCarrier: string | undefined;
  aggreeToSegFundchecked = false;
  indeterminate = false;
  disabled = false;
  salescharge: SalesCharge[] = [];
  selectedCharge: string | undefined;
  amount: Amounts[] = [];
  amountSelect: string | undefined;
  maturity: Maturity[] = [];
  selectedMaturity: any | undefined;
  deathPercentage: any;
  selectedDeathPercentage: any;
  investmentpurpose: any | undefined;
  investmentPurposeSelect: InvestmentPurpose[] = [];
  commissionPercent: string | undefined;
  risktolerance: any;
  risktoleranceSelect: Risktolerance[] = [];
  timeHorizon: any | undefined;
  selectedTimeHorizon: TimeHorizon[] = [];


//aggreeToSegFundchecked: boolean = false;
inputValue: string = '';
otherValue: any;

toggleInputField() {
  this.aggreeToSegFundchecked = this.aggreeToSegFundchecked;
  console.log(this.aggreeToSegFundchecked);
}

getSegregatedFundResults(){
  this.segService.segregatedwhysdata.next(this.inputClass!);
  console.log("Parent---->",this.inputClass);
  this.router.navigate(['/segregated-fund-results']);
}


   getCurrentDate(): string{
    return new Date().toISOString().split('T')[0];
  }
  
  currencyControl = new FormControl('', [Validators.required]);

 

  ngOnInit(): void {


  
    this.inputClass.currentDate = this.getCurrentDate();

    this.ServicesService.getUserInfo().subscribe(
      (data: Advisor[] | Object) => {
        if (Array.isArray(data)) {
          // Data is an array of advisors
          this.advisors = data;
          console.log('Users data:', this.advisors);
        } else {
        }
      },
      (error: any) => {
        console.error('Error fetching user info:', error);
      }
    );
    

      this.ServicesService.getCarrier().subscribe((carrierData: any) => {
        this.carrier = carrierData;
        //console.log('Carrier data', this.carrier);
      }),

      this.ServicesService.getSalesCharge().subscribe((salesChargeData: SalesCharge[] | Object) => {
        if(Array.isArray(salesChargeData)){
          this.salescharge = salesChargeData;
          console.log('SaleCharge--->', this.salescharge);
        } else {
          // Handle other cases if needed
        }
      },
      (error: any) => {
        console.error('Error fetching user info:', error);
      }
    );
     
   this.ServicesService.getInvestmentPurpose().subscribe((investmentPurposeData: InvestmentPurpose[] | Object) =>{
    if(Array.isArray(investmentPurposeData)){
      this.investmentpurpose = investmentPurposeData;
      console.log(investmentPurposeData);
    }else{

    }
  },
  (error: any) => {
    console.error('Error fetching user info:', error);
  }
  );
    this.ServicesService.getRisktolerance().subscribe((risktoleranceData: Risktolerance[] | object) => {
      if (Array.isArray(risktoleranceData)) {
        this.risktolerance = risktoleranceData;
        console.log('Risk Tolerance--->:', risktoleranceData);
      } else {
      }
    },
      (error: any) => {
        console.error('Error fetching user info:', error);
      }
    );

    this.ServicesService.getAmounts().subscribe((amountData: any) => {
      console.log(amountData);
      this.amount = amountData;
    })

    this.ServicesService.getMaturityDate().subscribe((maturityData: any) => {
      console.log(maturityData);
      this.maturity = maturityData;
    })
    this.ServicesService.getDeathPercent().subscribe((deathPercent: any) =>{
      console.log(deathPercent);
      this.deathPercentage = deathPercent
    })
    this.ServicesService.getTimeHorizon().subscribe((timeHorizondata: any) =>{
      console.log(timeHorizondata);
      this.timeHorizon = timeHorizondata
    })


  }
}


