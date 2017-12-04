import { TestBed, inject } from '@angular/core/testing';

import { DisneyService } from './disney.service';

describe('DisneyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisneyService]
    });
  });

  it('should be created', inject([DisneyService], (service: DisneyService) => {
    expect(service).toBeTruthy();
  }));
});
