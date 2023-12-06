import { TestBed } from '@angular/core/testing';

import { SegregateServiceService } from './segregate-service.service';

describe('SegregateServiceService', () => {
  let service: SegregateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegregateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
