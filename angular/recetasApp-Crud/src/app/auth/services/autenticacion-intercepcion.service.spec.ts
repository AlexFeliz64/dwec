import { TestBed } from '@angular/core/testing';

import { AutenticacionIntercepcionService } from './autenticacion-intercepcion.service';

describe('AutenticacionIntercepcionService', () => {
  let service: AutenticacionIntercepcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionIntercepcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
