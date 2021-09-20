import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  isLoging: boolean = false;
  loginForm!: FormGroup;

  constructor(private _LoginService: LoginService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.getMailError();
    // console.log(this.form.controlName.value);
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  public async validateLogin() {
    let response = await this._LoginService.getLoginData();
    // console.log(this.form.controls['email']).value;
    // this.clave = '';
    // for (let i = 0; i < response.length; i++) {
    //   if (this.correo === response[i].email) {
    //     console.log('correo valido');
    //     return response;
    //   } else {
    //     console.log('invalido');
    //   }
    // }
  }

  Submit() {
    console.log(this.loginForm.value);
  }
}
