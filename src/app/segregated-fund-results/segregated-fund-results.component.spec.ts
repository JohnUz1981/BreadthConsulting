import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegregatedFundResultsComponent } from './segregated-fund-results.component';

describe('SegregatedFundResultsComponent', () => {
  let component: SegregatedFundResultsComponent;
  let fixture: ComponentFixture<SegregatedFundResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegregatedFundResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegregatedFundResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
