import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMealPage } from './add-meal.page';

describe('AddMealPage', () => {
  let component: AddMealPage;
  let fixture: ComponentFixture<AddMealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
