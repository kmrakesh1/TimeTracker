import { TestBed } from '@angular/core/testing';

import { TimertasksService } from './timertasks.service';

describe('TimertasksService', () => {
  let service: TimertasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimertasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
