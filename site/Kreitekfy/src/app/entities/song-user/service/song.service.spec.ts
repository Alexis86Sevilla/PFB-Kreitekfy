/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SongUserService } from './song.service';

describe('Service: Song', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongUserService]
    });
  });

  it('should ...', inject([SongUserService], (service: SongUserService) => {
    expect(service).toBeTruthy();
  }));
});
