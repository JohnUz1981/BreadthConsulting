import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl, FormArray  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-segregated-fund-client-update',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule ],
  templateUrl: './segregated-fund-client-update.component.html',
  styleUrls: ['./segregated-fund-client-update.component.css'],
  providers: [DatePipe],
})
export class SegregatedFundClientUpdateComponent implements OnInit {

  isEditing: boolean = false;
  form: FormGroup | undefined;
  dialogRef: any;
  closebutton: any;
  currentDate!: any;
  segfunds_clientName: any;
  segfunds_advisor: any;
  segfunds_investmentbreakDown: any;
  editForm: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private formBuilder: FormBuilder  ) {
    this.editForm = this.formBuilder.group({
      segfunds_clientName: [this.data.CleintData.segfunds_clientName]
    });
  }

 // Declare editForm as a FormGroup


  ngOnInit() {
    this.editForm = this.formBuilder.group({
      createdDate: [this.data.CleintData.segfunds_createdDate],
      clientName:[this.data.CleintData.segfunds_clientName],
      advisor: [this.data.CleintData.segfunds_advisor],
      carrier: [this.data.CleintData.segfunds_carrier],
      commissionPrecent: [this.data.CleintData.segfunds_comissionPercent],
      deathBenefit: [this.data.CleintData.segfunds_deathBenefit],
      investmentAmount: [this.data.CleintData.segfunds_investmentAmount],
      maturityDate: [this.data.CleintData.segfunds_maturityDate],
      riskTolerance: [this.data.CleintData.segfunds_riskTolerance],
      salesCharge: [this.data.CleintData.segfunds_salesCharge],
      timeHorizon: [this.data.CleintData.segfunds_timeHorizon],
      investmentBreakDown: this.formBuilder.array(this.initInvestmentBreakdown()),
      
    })
    console.log("UPDATE Client Data--->", this.data.CleintData);
  }

  get investmentBreakDown() {
    return this.editForm.get('investmentBreakDown') as FormArray;
  }

  initInvestmentBreakdown() {
    if (this.data.CleintData && this.data.CleintData.segfunds_investmentbreakDown) {
      return this.data.CleintData.segfunds_investmentbreakDown.map((item: { investmentOptionfield: any; investmentPercentfield: any; }) => {
        return this.formBuilder.group({
          investmentOptionfield: [item.investmentOptionfield],
          investmentPercentfield: [item.investmentPercentfield]
        });
      });
    } else {
      return [];
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  
    if (!this.isEditing && this.editForm) {
      this.editForm.get('clientName').markAsTouched();
    }
  }
}
  
