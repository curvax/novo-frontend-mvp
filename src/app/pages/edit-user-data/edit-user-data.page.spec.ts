import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditUserDataPage } from './edit-user-data.page';

describe('EditUserDataPage', () => {
  let component: EditUserDataPage;
  let fixture: ComponentFixture<EditUserDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditUserDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
