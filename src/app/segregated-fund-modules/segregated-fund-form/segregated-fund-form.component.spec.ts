import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegregatedFundFormComponent } from './segregated-fund-form.component';

describe('SegregatedFundFormComponent', () => {
  let component: SegregatedFundFormComponent;
  let fixture: ComponentFixture<SegregatedFundFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegregatedFundFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegregatedFundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
