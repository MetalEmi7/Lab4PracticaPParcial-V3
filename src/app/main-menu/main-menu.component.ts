import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsuarioService } from "../servicios/usuario.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private miUserServ:UsuarioService, private ruta:Router) { }

  desloguear()
  {
    try{
      localStorage.removeItem("token");
      this.ruta.navigateByUrl('/');
    }
    catch (error){
      console.log(error);
      return false;
    }
  }



  ngOnInit() { }

}
