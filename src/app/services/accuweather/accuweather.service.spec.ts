import { TestBed } from '@angular/core/testing';

import { AccuweatherService } from './accuweather.service';

describe('AccuweatherService', () => {
  let service: AccuweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccuweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
