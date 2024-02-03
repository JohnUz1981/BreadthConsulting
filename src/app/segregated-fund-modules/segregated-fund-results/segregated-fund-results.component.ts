import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegregatedwhysInputs } from '../segregatedwhys-class';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { SegregateServiceService } from '../segregate-service.service';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { response } from 'express';
import { error } from 'console';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-segregated-fund-results',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segregated-fund-results.component.html',
  styleUrl: './segregated-fund-results.component.css'
})
export class SegregatedFundResultsComponent implements OnInit {
  segData: SegregatedwhysInputs | undefined;
  SegregateServiceService: any;


  constructor(private segService: SegregateServiceService, private router: Router) { }

  ngOnInit() : void {
    this.segService.getSegregatedFundResults().subscribe((segResultData: SegregatedwhysInputs) => {
      this.segData = segResultData;
      console.log("Form 1 Data----->:", segResultData);
    });
  }

  sendSegDataDb() {
    this.segService.getSegregatedFundResults().subscribe((segResultData: SegregatedwhysInputs) => {
      this.segData = segResultData;
      console.log("POST DATA----->", segResultData);
      const SegFunAPIMappings = {
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
        segfunds_investmentPurpose: segResultData.investmentPurpose
      }

      this.segService.sendSegFundDataToDb(SegFunAPIMappings).subscribe(
        (response: any) => {
          console.log("POST response ----->", response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/segregated-fund-list']);
        },
        (error: HttpErrorResponse) => {
          console.error(`Error: ${error.message}`);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500
          });
        }  
      );
    });
  }
  
}
