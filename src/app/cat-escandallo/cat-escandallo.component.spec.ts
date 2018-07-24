import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEscandalloComponent } from './cat-escandallo.component';

describe('CatEscandalloComponent', () => {
  let component: CatEscandalloComponent;
  let fixture: ComponentFixture<CatEscandalloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatEscandalloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatEscandalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
