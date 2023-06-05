import { TestBed } from '@angular/core/testing';

import { InscripcionesDataService } from './inscripciones-data.service';

describe('InscripcionesDataService', () => {
  let service: InscripcionesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripcionesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
