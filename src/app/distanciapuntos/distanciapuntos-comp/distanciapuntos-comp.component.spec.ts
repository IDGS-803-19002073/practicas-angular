import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciapuntosCompComponent } from './distanciapuntos-comp.component';

describe('DistanciapuntosCompComponent', () => {
  let component: DistanciapuntosCompComponent;
  let fixture: ComponentFixture<DistanciapuntosCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistanciapuntosCompComponent]
    });
    fixture = TestBed.createComponent(DistanciapuntosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
