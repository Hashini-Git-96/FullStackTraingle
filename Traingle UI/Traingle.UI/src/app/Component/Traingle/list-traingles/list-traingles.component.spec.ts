import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainglesComponent } from './list-traingles.component';

describe('ListTrainglesComponent', () => {
  let component: ListTrainglesComponent;
  let fixture: ComponentFixture<ListTrainglesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTrainglesComponent]
    });
    fixture = TestBed.createComponent(ListTrainglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
