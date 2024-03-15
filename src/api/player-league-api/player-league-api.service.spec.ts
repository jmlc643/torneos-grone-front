import { TestBed } from '@angular/core/testing';

import { PlayerLeagueApiService } from './player-league-api.service';

describe('PlayerLeagueApiService', () => {
  let service: PlayerLeagueApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerLeagueApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
