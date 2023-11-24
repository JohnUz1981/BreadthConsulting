import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule, } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

interface Advisor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reasons-why-segregated-fund',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './reasons-why-segregated-fund.component.html',
  styleUrl: './reasons-why-segregated-fund.component.css'
})
export class ReasonsWhySegregatedFundComponent {
  advisor: Advisor[] = [
    { value: 'Paul Dufour', viewValue: 'Paul Dufour' },
    { value: 'Ryan Wakeman', viewValue: 'Ryan Wakeman' },
    { value: 'Gerald Finnerty', viewValue: 'Gerald Finnerty' },
  ];

}
