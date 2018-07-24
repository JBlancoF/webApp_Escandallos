import { TestBed, inject } from '@angular/core/testing';

import { SideBarColorsService } from './side-bar-colors.service';

describe('SideBarColorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideBarColorsService]
    });
  });

  it('should be created', inject([SideBarColorsService], (service: SideBarColorsService) => {
    expect(service).toBeTruthy();
  }));
});
