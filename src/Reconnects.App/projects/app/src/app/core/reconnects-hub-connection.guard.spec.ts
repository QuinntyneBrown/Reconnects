import { TestBed } from '@angular/core/testing';

import { ReconnectsHubConnectionGuard } from './reconnects-hub-connection.guard';

describe('ReconnectsHubConnectionGuard', () => {
  let guard: ReconnectsHubConnectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReconnectsHubConnectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
