import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegregatedFundListComponent } from './segregated-fund-list.component';

describe('SegregatedFundListComponent', () => {
  let component: SegregatedFundListComponent;
  let fixture: ComponentFixture<SegregatedFundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegregatedFundListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegregatedFundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
