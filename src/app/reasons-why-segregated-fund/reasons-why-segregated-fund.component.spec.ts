import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsWhySegregatedFundComponent } from './reasons-why-segregated-fund.component';

describe('ReasonsWhySegregatedFundComponent', () => {
  let component: ReasonsWhySegregatedFundComponent;
  let fixture: ComponentFixture<ReasonsWhySegregatedFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonsWhySegregatedFundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReasonsWhySegregatedFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
