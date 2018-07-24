import { TestBed, inject } from '@angular/core/testing';

import { EscandallosAllService } from './escandallos-all.service';

describe('EscandallosAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscandallosAllService]
    });
  });

  it('should be created', inject([EscandallosAllService], (service: EscandallosAllService) => {
    expect(service).toBeTruthy();
  }));
});
