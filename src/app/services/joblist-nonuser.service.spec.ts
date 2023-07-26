import { TestBed } from '@angular/core/testing';

import { JoblistNonuserService } from './joblist-nonuser.service';

describe('JoblistNonuserService', () => {
  let service: JoblistNonuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoblistNonuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
