import { TestBed } from '@angular/core/testing';

import { Module01Service } from './module01.service';

describe('Module01Service', () => {
  let service: Module01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
