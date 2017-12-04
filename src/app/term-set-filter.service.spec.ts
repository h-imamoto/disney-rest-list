import { TestBed, inject } from '@angular/core/testing';

import { TermSetFilterService } from './term-set-filter.service';

describe('TermSetFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermSetFilterService]
    });
  });

  it('should be created', inject([TermSetFilterService], (service: TermSetFilterService) => {
    expect(service).toBeTruthy();
  }));
});
