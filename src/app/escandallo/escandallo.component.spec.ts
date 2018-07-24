import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandalloComponent } from './escandallo.component';

describe('EscandalloComponent', () => {
  let component: EscandalloComponent;
  let fixture: ComponentFixture<EscandalloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscandalloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscandalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
