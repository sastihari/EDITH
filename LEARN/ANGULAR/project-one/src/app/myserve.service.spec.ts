import { TestBed } from '@angular/core/testing';

import { MyServeService } from './myserve.service';

describe('MyServeService', () => {
  let service: MyServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
