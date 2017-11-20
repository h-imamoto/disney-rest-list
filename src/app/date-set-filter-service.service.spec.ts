import { TestBed, inject } from '@angular/core/testing';

import { DateSetFilterServiceService } from './date-set-filter-service.service';

describe('DateSetFilterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateSetFilterServiceService]
    });
  });

  it('should be created', inject([DateSetFilterServiceService], (service: DateSetFilterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
