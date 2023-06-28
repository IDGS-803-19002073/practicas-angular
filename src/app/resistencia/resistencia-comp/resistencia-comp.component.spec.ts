import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaCompComponent } from './resistencia-comp.component';

describe('ResistenciaCompComponent', () => {
  let component: ResistenciaCompComponent;
  let fixture: ComponentFixture<ResistenciaCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistenciaCompComponent]
    });
    fixture = TestBed.createComponent(ResistenciaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
