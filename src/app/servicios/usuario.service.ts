import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpService } from "../servicios/http.service";

@Injectable()
export class UsuarioService {

  constructor(public miHttp:HttpService)
  {}


  public select()  {
    return this.miHttp.realSelect()
    .then(data=>data)
    .catch(error=>error)
  }


  public selectUsuario(usuario)  {   
    return this.miHttp.realSelectUsuario(usuario)
    .then(data=>data)
    .catch(error=>error)
  }


  public insert(datos)  {
    return this.miHttp.realInsert(datos)
    .then(data=>data)
    .catch(error=>error)
  }


  //Eliminacion sin permisos ni controles.
  public delete(datos)  {
    return this.miHttp.realDelete(datos)
    .then(data=>data)
    .catch(error=>error)
  }


  //Verificacion de usuario desde el Frontend
  public deleteUsuario(dato_id)  {
    return this.miHttp.realDeleteUsuario(dato_id)
    .then(data=>data)
    .catch(error=>error)
  }


/*
  //Verificacion de usuario desde el Backend
  public deleteUsuarioConJWT(datos)  {
    return this.miHttp.realDeleteUsuarioConJWT(datos)
    .then(data=>data)
    .catch(error=>error)
  }
*/



  public subirPhoto(photo)  {           //-
    return this.miHttp.realSubirPhoto(photo)
    .then(data=>data)
    .catch(error=>error)
  }  



  public login(datos)  {
    return this.miHttp.realLogin(datos) 
    .then(data=>data)
    .catch(error=>error)
  }









  
  private extraerDatos(resp:Response) {
    return resp.json();
  }

  private handlerError(error:Response | any) {
    return error;
}
}