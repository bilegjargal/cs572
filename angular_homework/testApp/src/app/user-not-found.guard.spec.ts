import { TestBed, async, inject } from '@angular/core/testing';

import { UserNotFoundGuard } from './user-not-found.guard';

describe('UserNotFoundGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotFoundGuard]
    });
  });

  it('should ...', inject([UserNotFoundGuard], (guard: UserNotFoundGuard) => {
    expect(guard).toBeTruthy();
  }));
});
