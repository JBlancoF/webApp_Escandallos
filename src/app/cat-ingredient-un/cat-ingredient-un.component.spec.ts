import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatIngredientUnComponent } from './cat-ingredient-un.component';

describe('CatIngredientUnComponent', () => {
  let component: CatIngredientUnComponent;
  let fixture: ComponentFixture<CatIngredientUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatIngredientUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatIngredientUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
