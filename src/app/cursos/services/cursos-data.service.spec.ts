import { TestBed } from '@angular/core/testing';

import { CursosDataService } from './cursos-data.service';

describe('CursosDataService', () => {
  let service: CursosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
