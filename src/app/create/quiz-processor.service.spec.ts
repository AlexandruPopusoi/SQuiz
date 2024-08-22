import { TestBed } from '@angular/core/testing';

import { QuizProcessorService } from './quiz-processor.service';

describe('QuizProcessorService', () => {
  let service: QuizProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
