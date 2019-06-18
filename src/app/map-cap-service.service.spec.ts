import { TestBed } from '@angular/core/testing';

import { MapCapServiceService } from './map-cap-service.service';

describe('MapCapServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapCapServiceService = TestBed.get(MapCapServiceService);
    expect(service).toBeTruthy();
  });
});
