import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSegregatedFundFormComponent } from './dynamic-segregated-fund-form.component';

describe('DynamicSegregatedFundFormComponent', () => {
  let component: DynamicSegregatedFundFormComponent;
  let fixture: ComponentFixture<DynamicSegregatedFundFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSegregatedFundFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicSegregatedFundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
