import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinepolisCompComponent } from './cinepolis-comp.component';

describe('CinepolisCompComponent', () => {
  let component: CinepolisCompComponent;
  let fixture: ComponentFixture<CinepolisCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinepolisCompComponent]
    });
    fixture = TestBed.createComponent(CinepolisCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
