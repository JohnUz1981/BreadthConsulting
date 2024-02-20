import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegregatedFundClientUpdateComponent } from './segregated-fund-client-update.component';

describe('SegregatedFundClientUpdateComponent', () => {
  let component: SegregatedFundClientUpdateComponent;
  let fixture: ComponentFixture<SegregatedFundClientUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegregatedFundClientUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegregatedFundClientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
