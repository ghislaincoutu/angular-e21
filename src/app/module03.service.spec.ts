import { TestBed } from '@angular/core/testing';

import { Module03Service } from './module03.service';

describe('Module03Service', () => {
  let service: Module03Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module03Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
