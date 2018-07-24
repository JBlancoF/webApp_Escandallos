import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscandallosListComponent } from './escandallos-list.component';

describe('EscandallosListComponent', () => {
  let component: EscandallosListComponent;
  let fixture: ComponentFixture<EscandallosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscandallosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscandallosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
