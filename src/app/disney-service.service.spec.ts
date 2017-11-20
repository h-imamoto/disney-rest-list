import { TestBed, inject } from '@angular/core/testing';

import { DisneyServiceService } from './disney-service.service';

describe('DisneyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisneyServiceService]
    });
  });

  it('should be created', inject([DisneyServiceService], (service: DisneyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
