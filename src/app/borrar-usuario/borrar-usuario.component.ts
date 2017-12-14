import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from "../servicios/usuario.service";

import { AuthService } from "../servicios/auth/auth.service";

@Component({
  selector: 'app-borrar-usuario',
  templateUrl: './borrar-usuario.component.html',
  styleUrls: ['./borrar-usuario.component.css']
})
export class BorrarUsuarioComponent implements OnInit {
  @Input()
  idParaBorrar;

  @Output()
  stdEvent:EventEmitter<any>;

  token = this.miAuth.getToken();   


  constructor(private perService:UsuarioService, private miAuth: AuthService)
  {
    this.stdEvent = new EventEmitter<any>();
  }





  BorrarUsuario(ID)
  {
    if (this.token.data.rol == "Admin") {
      this.perService.deleteUsuario(ID)
      .then(data=>{
  
      console.log(data);
  
      this.stdEvent.emit();
      })
    }
    else
    {
      console.log("No tiene permitido esa accion");
      alert("No tiene permitido esa accion");
    }
  }






  ngOnInit() {
  }

}
