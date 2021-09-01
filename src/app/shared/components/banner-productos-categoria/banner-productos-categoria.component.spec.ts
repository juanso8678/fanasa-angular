import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProductosCategoriaComponent } from './banner-productos-categoria.component';

describe('BannerProductosCategoriaComponent', () => {
  let component: BannerProductosCategoriaComponent;
  let fixture: ComponentFixture<BannerProductosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerProductosCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProductosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
