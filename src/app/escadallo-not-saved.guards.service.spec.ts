import { TestBed, inject } from '@angular/core/testing';

import { EscadalloNotSaved.GuardsService } from './escadallo-not-saved.guards.service';

describe('EscadalloNotSaved.GuardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscadalloNotSaved.GuardsService]
    });
  });

  it('should be created', inject([EscadalloNotSaved.GuardsService], (service: EscadalloNotSaved.GuardsService) => {
    expect(service).toBeTruthy();
  }));
});
