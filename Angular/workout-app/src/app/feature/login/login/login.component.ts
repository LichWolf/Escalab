import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  correo: string = '';
  clave: string = '';
  isLoging: boolean = false;

  constructor(private _LoginService: LoginService) {}

  ngOnInit(): void {
    // this.getMailError();
    // console.log(this.form.controlName.value);
  }

  public async validateLogin() {
    let response = await this._LoginService.getLoginData();
    // console.log(this.form.controls['email']).value;
    this.clave = '';
    // for (let i = 0; i < response.length; i++) {
    //   if (this.correo === response[i].email) {
    //     console.log('correo valido');
    //     return response;
    //   } else {
    //     console.log('invalido');
    //   }
    // }
  }
  // getMailError() {
  //   if (this.email.hasError('required')) {
  //     return 'Debes ingresar un email';
  //   }
  //   return this.email.hasError('email') ? 'No es un email valido' : '';
  // }
}
