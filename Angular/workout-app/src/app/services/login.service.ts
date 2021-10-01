import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private endpoint: string;
  private header: {};
  private params: {};

  constructor() {
    this.endpoint = '';
    this.header = {};
    this.params = {};
    if (environment.local) {
      this.initializeLoginServiceLocal();
    } else {
      this.initializeLoginServiceDummy();
    }
  }

  initializeLoginServiceLocal() {
    this.endpoint = `${environment.ip.local}${environment.ruta.user}`;
    this.header = {
      'Content-Type': 'aplication/json',
    };
    this.params = {};
  }

  initializeLoginServiceDummy() {
    this.endpoint = `${environment.ruta.loginMock}`;
    this.header = {};
    this.params = {};
  }

  public async getUser(email: any) {
    let ruta = '';
    if (!environment.local) {
      ruta = this.endpoint;
    } else {
      ruta = `${this.endpoint}/${email}`;
    }
    const promise = await axios.get(ruta, {
      headers: this.header,
      params: this.params,
    });
    return promise.data;
  }
}
