import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldBase } from './segregated-fund-base';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { FieldControlService } from '../../services/field-control.service';
import { DynamicFormFieldComponent } from '../../A_Oldfiles/dynamic-form-field/dynamic-form-field.component';
import { ServicesService } from '../../services/services.service';
import { SegregatedwhysInputs } from '../segregatedwhys-class';
import { SegregateServiceService } from '../segregate-service.service';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import { NgxCurrencyDirective  } from 'ngx-currency';


@Component({
  selector: 'app-segregated-fund-form',
  standalone: true,
  imports: [CommonModule, DynamicFormFieldComponent, ReactiveFormsModule, MatButtonModule, NgSelectModule, NgxCurrencyDirective, FormsModule],
  providers: [FieldControlService],
  templateUrl: './segregated-fund-form.component.html',
  styleUrl: './segregated-fund-form.component.css'
})
export class SegregatedFundFormComponent {
  FormData!: FormGroup | any;
  investmentOptionfield: FormControl<any> | undefined;
  investmentPercentfield: FormControl<any> | undefined;
  investmentbreakDown: any;
  segData: SegregatedwhysInputs | undefined;
  SegregateServiceService: any;
  currentDate: any;
  fb: any;

  
  constructor(private builder: FormBuilder, 
    private ServicesService: ServicesService, 
    private segService: SegregateServiceService, 
    private router: Router,
    private http: HttpClient) {
    this.ServicesService.getInvestmentOptions().subscribe((investmentbreakDown: any) => {
      console.log(investmentbreakDown);
      this.investmentbreakDown = investmentbreakDown;
    })
    this.FormData = this.builder.group({
      investmentBreakdown: this.builder.array([
        this.builder.group({
          investmentOptionfield: [null, Validators.required],
          investmentPercentfield: [null, Validators.required],
        }),
      ]),
      
    });
    
  }

  ngOnInit()  : void {
    this.segService.getSegregatedFundResults().subscribe((segResultData: SegregatedwhysInputs) => {
      this.segData = segResultData;
      console.log("getdata----->:", segResultData);
      this.FormData = new FormGroup({
        segfunds_createdDate: new FormControl(segResultData.currentDate || ''),  
        segfunds_clientName: new FormControl(segResultData.clientName || ''),
        segfunds_advisor: new FormControl(segResultData.advisors || ''),
        segfunds_carrier: new FormControl(segResultData.carrier || ''),
        segfunds_maturityDate: new FormControl(segResultData.maturity || ''),
        segfunds_deathBenefit: new FormControl(segResultData.deathPercentage || ''),
        segfunds_salesCharge: new FormControl(segResultData.salescharge || ''),
        //segfunds_comissionPercent: new FormControl(segResultData.commissionPercent || ''),
        segfunds_timeHorizon: new FormControl(segResultData.selectedTimeHorizon || ''),
        segfunds_investmentAmount: new FormControl(segResultData.amount || ''),
        segfunds_riskTolerance: new FormControl(segResultData.risktoleranceSelect || ''),
        segfunds_investmentPurpose: new FormControl(segResultData.investmentPurposeSelect || ''),
        segfunds_investmentbreakDown: new FormArray([]),
                
      });
    });
  }


  additem() {
    const newGroup = this.builder.group({
      investmentOptionfield: [null, Validators.required],
      investmentPercentfield: [null, Validators.required],

    });

    (this.FormData.get('segfunds_investmentbreakDown') as FormArray).push(newGroup);
  }


  deleteItem(index: any) {
    (this.FormData.get('segfunds_investmentbreakDown') as FormArray).removeAt(index)
  }

  SendInvestmentBreakdownData(): AbstractControl[] {
    return (<FormArray>this.FormData.get('segfunds_investmentbreakDown')).controls
  }
  OnSubmit(FormData: any) {
    console.log(FormData, "FormData")
   
  }

  sendSegDataDb() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const data = JSON.stringify(this.FormData.value);
    console.log("POST DATA------>",  data);
    this.http.post('https://localhost:7086/api/SegFund', data, { headers: headers }).subscribe(response => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/segregated-fund-list']);
    }, error =>{
       console.log('Error posting data:', error);
       Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500
      });
     });
  }
}