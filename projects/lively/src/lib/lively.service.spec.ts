import { TestBed } from '@angular/core/testing';

import { LivelyService } from './lively.service';

describe('LivelyService', () => {
  let service: LivelyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivelyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
