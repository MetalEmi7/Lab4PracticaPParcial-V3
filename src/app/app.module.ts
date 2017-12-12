import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //Necesario para doble bindeo
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { HttpModule } from "@angular/http";     //HTTP
//modulos V3
import { JwtModule } from './modulos/jwt/jwt.module';
import { RoutingModule } from './modulos/routing/routing.module';


import { AppComponent } from './app.component';


import { UsuarioService } from "./servicios/usuario.service";
import { HttpService } from "./servicios/http.service";
//servicios V3
import { WebService } from './servicios/web/web.service';

/*
En esta version del proyecto se hace uso del ruteo en otro modulo 'RoutingModule'

*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RoutingModule,        
    HttpModule,   
    JwtModule                         
  ],
  providers: [
    UsuarioService,
    HttpService,
    WebService,   //Este servicio se encuentra aca a diferencia de los otros 2                           
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
