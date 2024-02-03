import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldBase } from './segregated-fund-base';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldControlService } from '../../services/field-control.service';
import { DynamicFormFieldComponent } from '../../A_Oldfiles/dynamic-form-field/dynamic-form-field.component';
import { DropdownField } from './segregated-fund-dropdowns';
import { TextboxField } from './segregated-fund-textbox';
import { ServicesService } from '../../services/services.service';
import { SegregatedwhysInputs } from '../segregatedwhys-class';
import { SegregateServiceService } from '../segregate-service.service';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-segregated-fund-form',
  standalone: true,
  imports: [CommonModule, DynamicFormFieldComponent, ReactiveFormsModule, MatButtonModule, NgSelectModule],
  providers: [FieldControlService],
  templateUrl: './segregated-fund-form.component.html',
  styleUrl: './segregated-fund-form.component.css'
})
export class SegregatedFundFormComponent {
  FormData!: FormGroup
  investmentOptionfield: FormControl<any> | undefined;
  investmentPercentfield: FormControl<any> | undefined;
  investmentbreakDown: any;
  segData: SegregatedwhysInputs | undefined;
  SegregateServiceService: any;


  constructor(private builder: FormBuilder, 
    private ServicesService: ServicesService, 
    private segService: SegregateServiceService, 
    private router: Router,
    private http: HttpClient 
    
    ) {
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
    });
  }


  additem() {
    const newGroup = this.builder.group({
      investmentOptionfield: [null, Validators.required],
      investmentPercentfield: [null, Validators.required],
    });

    (this.FormData.get('investmentBreakdown') as FormArray).push(newGroup);
  }


  deleteItem(index: any) {
    (this.FormData.get('investmentBreakdown') as FormArray).removeAt(index)
  }

  SendInvestmentBreakdownData(): AbstractControl[] {
    return (<FormArray>this.FormData.get('investmentBreakdown')).controls
  }
  OnSubmit(FormData: any) {
    console.log(FormData, "FormData")
   
  }

  sendSegDataDb() {
    console.log(FormData, "FormData");
    this.segService.getSegregatedFundResults().subscribe((segResultData: SegregatedwhysInputs) => {

      const investmentBreakdown: any = this.investmentbreakDown; 
      const segFunAPIMappings = {
        segfunds_createdDate: segResultData.currentDate,
        segfunds_clientName: segResultData.clientName,
        segfunds_advisor: segResultData.advisors,
        segfunds_carrier: segResultData.carrier,
        segfunds_salesCharge: segResultData.salescharge,
        segfunds_maturityDate: segResultData.maturity,
        segfunds_deathBenefit: segResultData.deathPercentage,
        segfunds_comissionPercent: segResultData.commissionPercent,
        segfunds_timeHorizon: segResultData.selectedTimeHorizon,
        segfunds_investmentAmount: segResultData.amount,
        segfunds_riskTolerance: segResultData.risktolerance,
        segfunds_investmentPurpose: segResultData.investmentPurpose,
        segfunds_investmentbreakDown: investmentBreakdown.map((item: any) => ({
          investmentOptionfield: item.investmentOptionfield, 
          investmentPercentfield: item.investmentPercentfield, 
        })),
      };
      console.log("HERE", segFunAPIMappings);
      const apiUrl = 'https://localhost:7284/api/SegFund/PostSegFundData';
  
      // Make the HTTP POST request
      this.http.post(apiUrl, segFunAPIMappings).subscribe(
        (response: any) => {
          console.log('Data posted successfully', response);
          // Handle success, e.g., show a success message to the user
        },
        (error: any) => {
          console.error('Error posting data!!!', error);
          // Handle error, e.g., show an error message to the user
        }
      );
    });
  }  
}


