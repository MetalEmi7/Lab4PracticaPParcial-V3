import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { HttpModule } from "@angular/http";


import { AltaComponent } from '../../alta/alta.component';
import { LoginComponent } from '../../login/login.component';
import { MainMenuComponent } from '../../main-menu/main-menu.component';
import { BajaComponent } from '../../baja/baja.component';
import { ErrorComponent } from '../../error/error.component';
import { ListaComponent } from '../../lista/lista.component';   
import { MostrarUsuarioComponent } from '../../mostrar-usuario/mostrar-usuario.component';
import { ModificarComponent } from '../../modificar/modificar.component';
import { BorrarUsuarioComponent } from '../../borrar-usuario/borrar-usuario.component';

import { JwtModule } from '../jwt/jwt.module';
import { AuthService } from '../../servicios/auth/auth.service';
import { VerifyJwtService } from '../../servicios/verifyJwt/verify-jwt.service';


const appRoutes=[
  {path: "login",component: LoginComponent},  
  {path: "menu",component: MainMenuComponent,
    children:[
      {path: "alta", component: AltaComponent},
      {path: "baja", component: BajaComponent},
      {path: "listado", component: ListaComponent,
        children:[
          {path: "alta", component: AltaComponent}
        ]}
    ]},
  {path: "",component: LoginComponent},
  {path: "**",component: ErrorComponent}
]

@NgModule({
  declarations: [
    AltaComponent,
    LoginComponent,
    MainMenuComponent,
    BajaComponent,
    ErrorComponent,
    ListaComponent,
    MostrarUsuarioComponent,
    ModificarComponent,
    BorrarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers:
  [
    AuthService, VerifyJwtService
  ]
})
export class RoutingModule { }
