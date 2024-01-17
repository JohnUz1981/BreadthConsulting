import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegregatedClientDataComponent } from './segregated-client-data.component';

describe('SegregatedClientDataComponent', () => {
  let component: SegregatedClientDataComponent;
  let fixture: ComponentFixture<SegregatedClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegregatedClientDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegregatedClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
