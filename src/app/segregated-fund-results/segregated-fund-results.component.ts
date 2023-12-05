import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services/services.service';
import { SegregatedwhysClass } from '../segregatedwhys-class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-segregated-fund-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segregated-fund-results.component.html',
  styleUrl: './segregated-fund-results.component.css'
})
export class SegregatedFundResultsComponent  implements OnInit{
segregatedFundClass: any;
  segData: SegregatedwhysClass | undefined;
  service: any;

constructor(private http: HttpClient, private ServicesService: ServicesService,){}

ngInInit(){
  this.service.getSegregateData().subscribe((segregateddata: SegregatedwhysClass | undefined)=>{
    console.log(segregateddata);
    this.segData=segregateddata;
  })
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
