import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint: string;
  private header: {};
  private params: {};

  constructor() {
    this.endpoint = '';
    this.header = {};
    this.params = {};
    if(environment.local){
      this.initializeLoginServiceLocal();
    }else{
      this.initializeLoginServiceDummy();
    }
   }

  private initializeLoginServiceLocal(){
  this.endpoint = `${environment.ip.local}${environment.ruta.user}`;
  this.header = {
    'Content-Type': 'aplication/json'
  };
  this.params = {};
  }

  
  private initializeLoginServiceDummy(){

  }

  public async getLoginData(){
    const promise = await axios.get(this.endpoint, {
      headers: this.header,
      params: this.params
    });
    return  promise.data;
  }
}
