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



@Component({
  selector: 'app-segregated-fund-form',
  standalone: true,
  imports: [CommonModule, DynamicFormFieldComponent, ReactiveFormsModule, MatButtonModule, NgSelectModule],
  providers: [FieldControlService],
  templateUrl: './segregated-fund-form.component.html',
  styleUrl: './segregated-fund-form.component.css'
})
export class SegregatedFundFormComponent {
  FormData!  : FormGroup
investmentOptionfield: FormControl<any> | undefined;
investmentPercentfield: FormControl<any> | undefined;
investmentbreakDown: any;


  constructor(private builder: FormBuilder, private ServicesService: ServicesService) {
    this.ServicesService.getInvestmentOptions().subscribe((investmentbreakDown: any)=>{
      console.log(investmentbreakDown);
      this.investmentbreakDown = investmentbreakDown;
    })
  }



  ngOnInit() {
    this.FormData = this.builder.group({
      investmentBreakdown: this.builder.array([
        this.builder.group({
          investmentOptionfield: [null, Validators.required],
          investmentPercentfield: [null, Validators.required],
        }),
      ]),
    });
  }
  

    additem() {
      const newGroup = this.builder.group({
        investmentOptionfield: [null, Validators.required],
        investmentPercentfield: [null, Validators.required],
      });
    
      (this.FormData.get('investmentBreakdown') as FormArray).push(newGroup);
    }
    

    deleteItem(index: any){
      (this.FormData.get('investmentBreakdown') as FormArray).removeAt(index)
    }

    SendInvestmentBreakdownData(): AbstractControl[]{
      return(<FormArray>this.FormData.get('investmentBreakdown')).controls
    }
    OnSubmit(FormData: any){
      console.log(FormData, "FormData")
    }
  }


