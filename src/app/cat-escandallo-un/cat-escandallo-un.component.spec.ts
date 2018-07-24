import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEscandalloUnComponent } from './cat-escandallo-un.component';

describe('CatEscandalloUnComponent', () => {
  let component: CatEscandalloUnComponent;
  let fixture: ComponentFixture<CatEscandalloUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatEscandalloUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatEscandalloUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
