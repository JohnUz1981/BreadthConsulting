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
  ],
  templateUrl: './reasons-why-segregated-fund.component.html',
  styleUrls: ['./reasons-why-segregated-fund.component.css']
})
export class ReasonsWhySegregatedFundComponent implements OnInit {
  users: User[] = [];
  selectedUser: string | undefined;
  carrierData: Carrier[] = [];
  selectedCarrier: string | undefined;

  constructor(private http: HttpClient) { }
  currentDate = new Date();
  currentDateTime = new FormControl(this.currentDate);
  currencyControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.http.get<User[]>('../../assets/users.json').subscribe(
      (data) => {
        this.users = data;
        //console.log('Users data:', this.users);
      },
      (error) => {
        console.error('Error fetching users data:', error);
      }
    );
    this.http.get<Carrier[]>('../../assets/carriers.json').subscribe(
      (carrierdata) => {
        this.carrierData = carrierdata;
        //console.log('Carrier data:', this.carrierData);
      },
      (error) => {
        console.error('Error fetching users data:', error);
      }
    );
  }

}

