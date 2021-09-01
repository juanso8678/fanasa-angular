import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-productos-categoria',
  templateUrl: './banner-productos-categoria.component.html',
  styleUrls: ['./banner-productos-categoria.component.css']
})
export class BannerProductosCategoriaComponent implements OnInit {

  bannerProductos = [
    {
    "id": 1,
    "NombreProducto" : "Aspirina Tabletas 500 Mg 40",
    "StockDisponible" : 335.00,
    "PrecioNormal" : 335.00,
    "PrecioDescuento" : 250.00,
    "ImagenProducto" : "../../../../assets/images/Image-placeholder.png",
    "PorcentajeDescuento" : "20",
    "UrlProducto": '/tienda/detalle/'
  },
  {
    "id": 2,
    "NombreProducto" : "Aspirina Tabletas 500 Mg 40",
    "StockDisponible" : 335.00,
    "PrecioNormal" : 335.00,
    "PrecioDescuento" : 250.00,
    "ImagenProducto" : "../../../../assets/images/Image-placeholder.png",
    "PorcentajeDescuento" : "10",
    "UrlProducto": '/tienda/detalle/'
  },
  {
    "id": 3,
    "NombreProducto" : "Aspirina Tabletas 500 Mg 40",
    "StockDisponible" : 335.00,
    "PrecioNormal" : 335.00,
    "PrecioDescuento" : 250.00,
    "ImagenProducto" : "../../../../assets/images/Image-placeholder.png",
    "PorcentajeDescuento" : "10",
    "UrlProducto": '/tienda/detalle/'
  }


];

  constructor() { }

  ngOnInit(): void {
  }

}
