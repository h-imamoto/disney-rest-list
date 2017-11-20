import { TestBed, inject } from '@angular/core/testing';

import { DisneyRepositoryService } from './disney-repository.service';

describe('DisneyRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisneyRepositoryService]
    });
  });

  it('should be created', inject([DisneyRepositoryService], (service: DisneyRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
