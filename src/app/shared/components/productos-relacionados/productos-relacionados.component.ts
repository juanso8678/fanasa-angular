import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productos-relacionados',
  templateUrl: './productos-relacionados.component.html',
  styleUrls: ['./productos-relacionados.component.css']
})
export class ProductosRelacionadosComponent implements OnInit {

  title : string = 'Artículos Relacionados';
  ProductosRelacionados = [
      {
      "id": 1,
      "NombreProducto" : "Aspirina Tabletas 500 Mg 40",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel1.jpg"
    },
    {
      "id": 2,
      "NombreProducto" : "Alcohol 96 Sin desnaturalizar",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel2.jpg"
    },
    {
      "id": 3,
      "NombreProducto" : "Alcohol 96 Sin desnaturalizar",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel3.jpg"
    },
    {
      "id": 4,
      "NombreProducto" : "Cured Flex 100 PZS",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel3.jpg"
    },
    {"id": 5,
      "NombreProducto" : "Aspirina Tabletas 500 Mg 40",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel1.jpg"
    },
    {
      "id": 6,
      "NombreProducto" : "Alcohol 96 Sin desnaturalizar",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel2.jpg"
    },
    {
      "id": 7,
      "NombreProducto" : "Alcohol 96 Sin desnaturalizar",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel3.jpg"
    },
    {
      "id": 8,
      "NombreProducto" : "Cured Flex 100 PZS",
      "PrecioProducto" : 335.00,
      "PrecioDescuento" : 250.00,
      "ImagenProducto" : "../../../../assets/images/image-carrusel3.jpg"
    }


  ];

  customOptions: OwlOptions = {
    items: 4,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: true,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
          items: 1
      },
      576: {
          items: 1
      },
      768: {
          items: 2
      },
      992: {
          items: 3
      },
      1200: {
          items: 4
      }
  }  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
