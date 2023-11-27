import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as jsPDF from 'jspdf';
import { ServicesService } from '../services/services.service';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

interface Advisor {
  value: string;
  viewValue: string;
}

interface Carrier {
  name: any;
  value: string;
  viewValue: string;
}
interface User {
  name: string;
}


@Component({
  providers: [ServicesService],
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
    HttpClientModule,
    MatCardModule, 
    MatCheckboxModule, 
    FormsModule, 
    MatRadioModule
    
  ],
  templateUrl: './reasons-why-segregated-fund.component.html',
  styleUrls: ['./reasons-why-segregated-fund.component.css']
})
export class ReasonsWhySegregatedFundComponent implements OnInit {
  users: User[] = [];
  selectedUser: string | undefined;
  carrier: Carrier[] = [];
  selectedCarrier: string | undefined; 
  checked = false;
  indeterminate = false;
  disabled = false

  constructor(private http: HttpClient, private ServicesService: ServicesService) { }
  currentDate = new Date();
  currentDateTime = new FormControl(this.currentDate);
  currencyControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {

   this.ServicesService.getUserInfo().subscribe((data: any) =>{
    this.users = data;
    console.log('Users data:', this.users);
    
   }),

   this.ServicesService.getCarrier().subscribe((carrierData: any) => {
    this.carrier = carrierData;
    console.log('Carrier data', this.carrier);
   })
  }

}

