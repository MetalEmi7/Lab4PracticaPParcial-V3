import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  url:string = "http://localhost/api2Parcial/apirest/user/";

  constructor(public http:Http) { }

  public realSelect()  {
    return this.http.get(this.url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  
  public realSelectUsuario(usuario)  {
    return this.http.get(this.url + usuario.id)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  public realInsert(datos)  {
    return this.http.post(this.url + "add", datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public realDelete(datos)  {
    return this.http.post(this.url + "delete", datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }

  //recibe un unico atributo 'id' de persona.
  public realDeleteUsuario(dato_id)  {
    return this.http.post(this.url + "delete", dato_id)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }



  public realSubirPhoto(photo)  {
    return this.http.post(this.url + "subirPhoto", photo)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }  




  public realLogin(datos)  {    
    return this.http.post("http://localhost/api2Parcial/apirest/login/signin", datos)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }





  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }
}
