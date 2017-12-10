import { TestBed, inject } from '@angular/core/testing';

import { LetterBindService } from './letter-bind.service';

describe('LetterBindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LetterBindService]
    });
  });

  it('should be created', inject([LetterBindService], (service: LetterBindService) => {
    expect(service).toBeTruthy();
  }));
});
