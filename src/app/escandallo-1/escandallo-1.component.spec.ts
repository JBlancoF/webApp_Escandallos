import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Escandallo1Component } from './escandallo-1.component';

describe('Escandallo1Component', () => {
  let component: Escandallo1Component;
  let fixture: ComponentFixture<Escandallo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Escandallo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Escandallo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
