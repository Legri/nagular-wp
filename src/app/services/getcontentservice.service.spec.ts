import { TestBed, inject } from '@angular/core/testing';

import { GetcontentserviceService } from './getcontentservice.service';

describe('GetcontentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcontentserviceService]
    });
  });

  it('should be created', inject([GetcontentserviceService], (service: GetcontentserviceService) => {
    expect(service).toBeTruthy();
  }));
});
