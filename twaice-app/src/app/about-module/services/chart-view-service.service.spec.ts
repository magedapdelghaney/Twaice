import { TestBed } from '@angular/core/testing';

import { ChartViewServiceService } from './chart-view-service.service';

describe('ChartViewServiceService', () => {
  let service: ChartViewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartViewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
