import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaCompComponent } from './pizzeria-comp.component';

describe('PizzeriaCompComponent', () => {
  let component: PizzeriaCompComponent;
  let fixture: ComponentFixture<PizzeriaCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzeriaCompComponent]
    });
    fixture = TestBed.createComponent(PizzeriaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
