import { TestBed, inject } from '@angular/core/testing';

import { TheQuestionsService } from './the-questions.service';

describe('TheQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheQuestionsService]
    });
  });

  it('should be created', inject([TheQuestionsService], (service: TheQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
