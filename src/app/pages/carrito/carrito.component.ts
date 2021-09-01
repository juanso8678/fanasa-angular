import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  title: string = 'Carrito';
  ProductName: string = 'Paracetamol Tabletas De 500mg Caja Con 100 Tabletas';
  ProductCode: String = '75313036';
  ProductPrice: number = 200.00;
  ProductSubtotal: number = 440.00;
  
  OrderPedido: number = 2697285;
  OrderPrecioFarmacia: number = 335.29;
  OrderOferta: number = 35.29;
  OrderDescuento: number = 135.29;
  OrderIVA: number =  85.29;
  OrderIEPS: number = 45.29;
  OrderTotal: number = 2354.00;

  constructor() { }

  ngOnInit(): void {
  }

}
