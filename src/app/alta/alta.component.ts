import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UsuarioService } from "../servicios/usuario.service";

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent{
  @Output()
  stdEvent:EventEmitter<any>;
 
  form={
    password:"",
    email:"",
    rol:"",
    photo:"Default.jpg",
    jwt: localStorage.getItem("token")
  }
  
  constructor(private datos:UsuarioService )
  {
    this.stdEvent = new EventEmitter<any>();
  }
  CboxEditar:boolean=false;

  alta()
  {
    console.log("Metodo alta() - ");
    this.datos.insert(this.form)
    .then(data=>{      
      
      //console.log(data);
      console.log(data);
      this.stdEvent.emit();
      
    })
    .catch(error=> console.log(error))
  }




  tomarPhoto(archivo)
  {
    this.form.photo = archivo.target.files[0].name;

    this.datos.subirPhoto(archivo.target)
    .then(data=>{      

        console.log(archivo.target.files[0].name);
        console.log(archivo.target.files[0]);
        console.log(archivo.target);
        console.log(archivo);

      if (data == null) {
        alert("ALERTA");
      }
      
      
    })
    .catch(error=> console.log(error))

    
  }
}
