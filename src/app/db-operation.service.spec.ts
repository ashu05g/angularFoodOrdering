import { TestBed } from '@angular/core/testing';

import { DbOperationService } from './db-operation.service';

describe('DbOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbOperationService = TestBed.get(DbOperationService);
    expect(service).toBeTruthy();
  });
});
