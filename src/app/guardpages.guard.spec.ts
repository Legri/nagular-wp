import { TestBed, async, inject } from '@angular/core/testing';

import { GuardpagesGuard } from './guardpages.guard';

describe('GuardpagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardpagesGuard]
    });
  });

  it('should ...', inject([GuardpagesGuard], (guard: GuardpagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
