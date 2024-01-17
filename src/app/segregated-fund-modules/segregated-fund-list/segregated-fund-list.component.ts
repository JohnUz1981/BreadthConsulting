import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SegregatedwhysInputs } from '../segregatedwhys-class';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
}from '@angular/material/dialog';
import { SegregatedFundResultsComponent } from '../segregated-fund-results/segregated-fund-results.component';
@Component({
  selector: 'app-segregated-fund-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './segregated-fund-list.component.html',
  styleUrl: './segregated-fund-list.component.css'
})
export class SegregatedFundListComponent {
  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  getJsonValue: any;

  displayedColumns: string[] = [
    'segfunds_advisor',
    'segfunds_clientName',
    'segfunds_createdDate',
    'segFunds_id'
  ];
  dataSource!: MatTableDataSource<any>
  //segFunds_id: any;
  element: any;
  constructor(private http: HttpClient, public dialog: MatDialog) {
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SegregatedFundResultsComponent, {
      height: '400px',
      width: '800px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  async ngOnInit() {
    this.GetSegFunData();
  }

  public GetSegFunData() {
    this.http.get<SegregatedwhysInputs[]>(`https://localhost:7284/api/SegFund/GetData`).subscribe(segfunddata => {
      this.getJsonValue = segfunddata;
      this.dataSource = new MatTableDataSource(segfunddata);
      console.log(segfunddata);
    })
  }
  public GetSegClientData(segFundsId: any){
    console.log("Client record Id----->", segFundsId);
    this.http.get<SegregatedFundListComponent[]>(`https://localhost:7284/api/SegFund/GetData/${segFundsId}`).subscribe(SegCleintInfo => {
      console.log(SegCleintInfo)
    })
  }
}
