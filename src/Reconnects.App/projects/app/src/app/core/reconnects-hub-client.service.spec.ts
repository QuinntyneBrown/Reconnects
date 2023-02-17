import { TestBed } from '@angular/core/testing';

import { ReconnectsHubClientService } from './reconnects-hub-client.service';

describe('ReconnectsHubClientService', () => {
  let service: ReconnectsHubClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReconnectsHubClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
