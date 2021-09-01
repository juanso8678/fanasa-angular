import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { SliderBannerComponent } from './shared/components/slider-banner/slider-banner.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosRelacionadosComponent } from './shared/components/productos-relacionados/productos-relacionados.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { FiltrosComponent } from './shared/components/filtros/filtros.component';
import { FiltrosSwithchsComponent } from './shared/components/filtros-swithchs/filtros-swithchs.component';
import { CardProductComponent } from './shared/components/card-product/card-product.component';
import { FiltrosTopComponent } from './shared/components/filtros-top/filtros-top.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { BannerProductosCategoriaComponent } from './shared/components/banner-productos-categoria/banner-productos-categoria.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderBannerComponent,
    FooterComponent,
    MenuComponent,
    CarritoComponent,
    ProductosRelacionadosComponent,
    TiendaComponent,
    FiltrosComponent,
    FiltrosSwithchsComponent,
    CardProductComponent,
    FiltrosTopComponent,
    DetalleProductoComponent,
    BannerProductosCategoriaComponent,
    IngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
