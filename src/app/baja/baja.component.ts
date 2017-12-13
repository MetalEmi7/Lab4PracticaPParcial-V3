import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../servicios/usuario.service";

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {
  mostrar_btn_submit:boolean=false;

  form={
    id:"",
    password:"",
    email:"",
    rol:"",
    photo:"Default.jpg",
  }

  constructor(private datos:UsuarioService)
  { }



  baja()
  {
    console.log("Metodo baja() - ");
    this.datos.delete(this.form)
    .then(data=>{
      
      this.mostrar_btn_submit = false;
      console.log(data);
      
    })
    .catch(error=> console.log(error))
  }



  buscar()
  {
    console.log("Metodo buscar() - ");
    this.datos.selectUsuario(this.form)
    .then(data=>{

      console.log(this.form);
      console.log(data);

      if(data["status"] == 404)
      {
        alert("No se ha encontrado");
      } 
      else
      {
        this.mostrar_btn_submit = true;
        this.form = data;      
        console.log(data);
      }
      
    })
    .catch(error=> console.log(error))
  }  



  ngOnInit() {}

}
