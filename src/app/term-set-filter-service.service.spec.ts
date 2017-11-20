import { TestBed, inject } from '@angular/core/testing';

import { TermSetFilterServiceService } from './term-set-filter-service.service';

describe('TermSetFilterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermSetFilterServiceService]
    });
  });

  it('should be created', inject([TermSetFilterServiceService], (service: TermSetFilterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
