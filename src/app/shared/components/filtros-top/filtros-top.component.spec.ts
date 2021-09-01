import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosTopComponent } from './filtros-top.component';

describe('FiltrosTopComponent', () => {
  let component: FiltrosTopComponent;
  let fixture: ComponentFixture<FiltrosTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
