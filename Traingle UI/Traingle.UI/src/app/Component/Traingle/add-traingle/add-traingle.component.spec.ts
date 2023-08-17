import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraingleComponent } from './add-traingle.component';

describe('AddTraingleComponent', () => {
  let component: AddTraingleComponent;
  let fixture: ComponentFixture<AddTraingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTraingleComponent]
    });
    fixture = TestBed.createComponent(AddTraingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
