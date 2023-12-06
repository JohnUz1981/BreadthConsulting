import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegregatedwhysInputs } from '../segregatedwhys-class';
//import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SegregateServiceService } from '../segregate-service.service';



@Component({
  selector: 'app-segregated-fund-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './segregated-fund-results.component.html',
  styleUrl: './segregated-fund-results.component.css'
})
export class SegregatedFundResultsComponent implements OnInit {
  segData: SegregatedwhysInputs | undefined;

  constructor(private segService: SegregateServiceService) { }

  ngOnInit() : void {
    console.log('Component initialized');
    this.segService.getSegregateData().subscribe((segData) => {
      console.log("SegResults--->", segData);
    });
  }

}
