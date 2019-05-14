import { TestBed, inject } from '@angular/core/testing';

import { ConcertiService } from './concerti.service';

describe('ConcertiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcertiService]
    });
  });

  it('should be created', inject([ConcertiService], (service: ConcertiService) => {
    expect(service).toBeTruthy();
  }));
});
