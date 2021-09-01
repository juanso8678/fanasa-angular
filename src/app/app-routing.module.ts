import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';



const routes: Routes = [
  { path: '', component:IngresarComponent },
  { path: 'tienda', component:TiendaComponent }, 
  { path: 'carrito', component:CarritoComponent},
  { path: 'detalle-producto', component:DetalleProductoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
