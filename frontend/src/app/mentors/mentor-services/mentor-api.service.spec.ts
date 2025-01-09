import { TestBed } from '@angular/core/testing';

import { MentorApiService } from './mentor-api.service';

describe('MentorApiService', () => {
  let service: MentorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
