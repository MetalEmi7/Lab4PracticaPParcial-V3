import { TestBed, inject } from '@angular/core/testing';

import { VerifyJwtService } from './verify-jwt.service';

describe('VerifyJwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyJwtService]
    });
  });

  it('should be created', inject([VerifyJwtService], (service: VerifyJwtService) => {
    expect(service).toBeTruthy();
  }));
});
