import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatIngredientComponent } from './cat-ingredient.component';

describe('CatIngredientComponent', () => {
  let component: CatIngredientComponent;
  let fixture: ComponentFixture<CatIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
