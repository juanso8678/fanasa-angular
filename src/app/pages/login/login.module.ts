import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { OwlOptions } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HeaderComponent
  ]
})
export class LoginModule { 

  
  

}
