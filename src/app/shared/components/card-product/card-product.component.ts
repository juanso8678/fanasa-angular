import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {


  title : string = 'Artículos Relacionados';
  tiendaArticulos = [
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
