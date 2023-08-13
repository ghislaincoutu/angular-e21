import { TestBed } from '@angular/core/testing';

import { Module02Service } from './module02.service';

describe('Module02Service', () => {
  let service: Module02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
