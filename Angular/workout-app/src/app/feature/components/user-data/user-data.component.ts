import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserData } from 'src/app/services/userData.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  loginForm!: FormGroup;
  public nombre = '';
  public apellido = '';
  public nombre2 = '';
  public apellido2 = '';
  public region = '';
  public comuna = '';
  public direccion = '';
  public deptoNum = '';
  public userData: boolean = false;

  constructor(private fb: FormBuilder, private _UserData: UserData) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: [''],
      secondName: [''],
      lastName: [''],
      secondLN: [''],
      region: [''],
      state: [''],
      direction: [''],
      department: [''],
    });

    this.getUserData();
  }

  async getUserData() {
    let id = localStorage.getItem('user');
    let response = await this._UserData.getUserData(id);
    this.nombre = response[0].name1;
    this.apellido = response[0].lastName1;
    this.nombre2 = response[0].name2;
    this.apellido2 = response[0].lastName2;
    this.region = response[0].region;
    this.comuna = response[0].comuna;
    this.direccion = response[0].direccion;
    this.deptoNum = response[0].deptoNumber;
    // this.userData = this.newCentralData;
  }
  update() {
    //TODO: enviar actualizar datos
    console.log('vacio');
  }
}
