import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTraingleComponent } from './edit-traingle.component';

describe('EditTraingleComponent', () => {
  let component: EditTraingleComponent;
  let fixture: ComponentFixture<EditTraingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTraingleComponent]
    });
    fixture = TestBed.createComponent(EditTraingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
