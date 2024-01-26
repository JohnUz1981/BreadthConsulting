import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-segregated-client-data',
  standalone: true,
  imports: [CommonModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, DatePipe],
  templateUrl: './segregated-client-data.component.html',
  styleUrl: './segregated-client-data.component.css',
  providers: [DatePipe],
})
export class SegregatedClientDataComponent implements OnInit {
  dialogRef: any;
  closebutton: any;
  currentDate!: any;
segfunds_clientName: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datePipe: DatePipe) {}

  ngOnInit() {
    this.getCurrentDate();
  }
  getCurrentDate() {
    const today = new Date();
    this.currentDate = this.datePipe.transform(today, 'MMMM d, y');
  }

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
