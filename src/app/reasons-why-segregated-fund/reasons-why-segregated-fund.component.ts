import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule, } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import * as jsPDF from 'jspdf';


interface Advisor {
  value: string;
  viewValue: string;
}
interface Carrier {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reasons-why-segregated-fund',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './reasons-why-segregated-fund.component.html',
  styleUrl: './reasons-why-segregated-fund.component.css'
})
export class ReasonsWhySegregatedFundComponent {
  advisor: Advisor[] = [
    { value: 'Paul Dufour', viewValue: 'Paul Dufour' },
    { value: 'Ryan Wakeman', viewValue: 'Ryan Wakeman' },
    { value: 'Gerald Finnerty', viewValue: 'Gerald Finnerty' },
  ];

  carrier: Carrier[] = [
    { value: 'Canada Life', viewValue: 'Canada Life' },
    { value: 'Manulife', viewValue: 'Manulife' },
    { value: 'Sunlife', viewValue: 'Sunlife' },
    { value: 'Equitable Life', viewValue: 'Equitable Life' },
    { value: 'BMO', viewValue: 'BMO' },
  ];
  currentDate = new Date();
  currentDateTime = new FormControl(this.currentDate);
  currencyControl = new FormControl('', [Validators.required]);
}
