import { TestBed, inject } from '@angular/core/testing';

import { DateSetFilterService} from './date-set-filter.service';

describe('DateSetFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateSetFilterService]
    });
  });

  it('should be created', inject([DateSetFilterService], (service: DateSetFilterService) => {
    expect(service).toBeTruthy();
  }));
});
