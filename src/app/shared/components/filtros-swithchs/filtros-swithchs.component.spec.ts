import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosSwithchsComponent } from './filtros-swithchs.component';

describe('FiltrosSwithchsComponent', () => {
  let component: FiltrosSwithchsComponent;
  let fixture: ComponentFixture<FiltrosSwithchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosSwithchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosSwithchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
