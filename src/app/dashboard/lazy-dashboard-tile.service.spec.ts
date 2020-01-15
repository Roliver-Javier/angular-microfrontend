/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LazyDashboardTileService } from './lazy-dashboard-tile.service';

describe('Service: LazyDashboardTile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyDashboardTileService]
    });
  });

  it('should ...', inject([LazyDashboardTileService], (service: LazyDashboardTileService) => {
    expect(service).toBeTruthy();
  }));
});
