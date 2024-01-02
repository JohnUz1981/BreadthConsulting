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

@Component({
  selector: 'app-segregated-fund-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './segregated-fund-list.component.html',
  styleUrl: './segregated-fund-list.component.css'
})
export class SegregatedFundListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  getJsonValue: any;

  displayedColumns: string[] = [
    'segfunds_advisor',
    'segfunds_clientName',
    'segfunds_createdDate'
  ];
  dataSource!: MatTableDataSource<any>
  constructor(private http: HttpClient) {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
}
