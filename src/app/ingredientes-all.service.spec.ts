import { TestBed, inject } from '@angular/core/testing';

import { IngredientesAllService } from './ingredientes-all.service';

describe('IngredientesAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientesAllService]
    });
  });

  it('should be created', inject([IngredientesAllService], (service: IngredientesAllService) => {
    expect(service).toBeTruthy();
  }));
});
