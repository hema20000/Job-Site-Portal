import { TestBed } from '@angular/core/testing';

import { UploadCVService } from './upload-cv.service';

describe('UploadCVService', () => {
  let service: UploadCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
