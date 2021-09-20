import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  validateEmail: boolean = false;
  validatePassword: boolean = false;
  validateForm: boolean = false;
  isLoging: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private _LoginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      clave: [''],
    });
  }

  public async validateLogin() {
    let response = await this._LoginService.getLoginData();
    for (let i = 0; i < response.length; i++) {
      if (this.loginForm.value.email === response[i].email) {
        this.validateEmail = true;
        console.log(this.validateEmail);
      }
    }
    for (let i = 0; i < response.length; i++) {
      if (this.loginForm.value.clave === response[i].clave) {
        this.validatePassword = true;
        console.log(this.validatePassword);
      }
    }
    if (this.validatePassword && this.validateEmail) {
      this.validateForm = true;
    }
    // else{
    //  TODO: levantar modal
    // }
  }

  Submit() {
    this.validateLogin();
    if (this.validateForm == true) {
      this.router.navigateByUrl('user');
    }
  }
}
