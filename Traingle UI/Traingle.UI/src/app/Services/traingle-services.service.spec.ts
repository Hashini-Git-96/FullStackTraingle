import { TestBed } from '@angular/core/testing';

import { TraingleServicesService } from './traingle-services.service';

describe('TraingleServicesService', () => {
  let service: TraingleServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraingleServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
