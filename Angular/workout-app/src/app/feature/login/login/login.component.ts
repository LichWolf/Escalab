import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor() {
   }

  ngOnInit(): void {
  }
    getMailError(){
      if(this.email.hasError('required')){
        return 'Debes ingresar un email'
      }
      return this.email.hasError('email') ? 'No es un email valido':'';
    }

  test(){
    console.log('test!');
  }
}
