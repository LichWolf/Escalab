import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserData {
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

  private initializeLoginServiceLocal() {
    this.endpoint = `${environment.ip.local}${environment.ruta.user}`;
    this.header = {
      'Content-Type': 'aplication/json',
    };
    this.params = {};
  }

  private initializeLoginServiceDummy() {
    this.endpoint = `${environment.ruta.userDataMock}`;
    this.header = {
      'Content-Type': 'aplication/json',
    };
    this.params = {};
  }

  public async getUserData(id: any) {
    this.endpoint = `${environment.ip.local}/${id}`;
    const promise = await axios.get(this.endpoint, {
      headers: this.header,
      params: this.params,
    });
    return promise.data;
  }
}
