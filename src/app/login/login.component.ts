import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuarioService } from "../servicios/usuario.service";
import { HttpService } from "../servicios/http.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form={
  email:"",
  password:""  
  }
  constructor(private rout:Router, private datos:UsuarioService, private Http:HttpService) { }

  Loguearse()
  {
    this.Http.realLogin(this.form)
    .then(data=>{
      
        if (data.jwt != null) {        
          this.rout.navigate(["/menu"]);   
          localStorage.setItem("token", data.jwt);     
        }
        else
        {
          console.log(data);
        }        

        console.log(data);
        
    })
    .catch(error=>{
      console.log(error);
    })
    
  }

  ngOnInit() {
  }

}
