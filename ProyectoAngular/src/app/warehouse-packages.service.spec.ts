import { TestBed } from '@angular/core/testing';

import { WarehousePackagesService } from './services/warehouse-packages.service';

describe('WarehousePackagesService', () => {
  let service: WarehousePackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousePackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
