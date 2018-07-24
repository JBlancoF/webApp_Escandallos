import { TestBed, inject } from '@angular/core/testing';

import { SignInUsersService } from './sign-in-users.service';

describe('SignInUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInUsersService]
    });
  });

  it('should be created', inject([SignInUsersService], (service: SignInUsersService) => {
    expect(service).toBeTruthy();
  }));
});
