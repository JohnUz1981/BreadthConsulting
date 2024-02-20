import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SegregatedwhysInputs } from '../segregatedwhys-class';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
}from '@angular/material/dialog';
import { SegregatedClientDataComponent } from '../segregated-client-data/segregated-client-data.component';
import { SegregatedFundClientUpdateComponent } from '../segregated-fund-client-update/segregated-fund-client-update.component';
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
    MatMenuModule,
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
    'segfunds_investmentbreakDown',
    'segFunds_id'
  ];
  dataSource!: MatTableDataSource<any>
  //segFunds_id: any;
  element: any;
  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) {
  }
  openExportDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(SegregatedClientDataComponent, {
      height: 'auto',
      width: '1000px',
      data: { CleintData: data },
      enterAnimationDuration,
      exitAnimationDuration,
    });
    console.log("MODAL DATA---->", data);
  }
  

  openClientSummaryDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(SegregatedFundClientUpdateComponent, {
      height: 'auto',
      width: '1500px',
      data: { CleintData: data },
      enterAnimationDuration,
      exitAnimationDuration,
    });
    console.log("MODAL DATA---->", data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  async ngOnInit() {
    this.GetSegFunData();
  }

  public GetSegFunData() {
    this.http.get<SegregatedwhysInputs[]>(`https://localhost:7086/api/SegFund`).subscribe(segfunddata => {
      this.getJsonValue = segfunddata;
      this.dataSource = new MatTableDataSource(segfunddata);
      
      console.log("GetAllRecords------->", segfunddata);
      console.log("GetInvestmentBreakDown----->", segfunddata[0].segfunds_investmentbreakDown);
      
    });
  }
  public GetSegClientToExportData(segFundsId: any){
    console.log("Client record Id----->", segFundsId);
    this.http.get<SegregatedFundListComponent[]>(`https://localhost:7086/api/SegFund/${segFundsId}`).subscribe(SegCleintInfo => {
      console.log("DATA----->", SegCleintInfo)
      this.openExportDialog('300ms', '150ms', SegCleintInfo);
    })
  }

    GetSegregatedFundResults(segFundsId: any) {
      console.log("Client record Id----->", segFundsId);
      this.http.get<SegregatedFundClientUpdateComponent[]>(`https://localhost:7086/api/SegFund/${segFundsId}`).subscribe(SegCleintInfo => {
        console.log("DATA----->", SegCleintInfo)
        this.openClientSummaryDialog('300ms', '150ms', SegCleintInfo);
    })
  }
}
