import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

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
  userData: string | undefined;

  constructor(
    private _LoginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog
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
      }
    }
    for (let i = 0; i < response.length; i++) {
      if (this.loginForm.value.clave === response[i].clave) {
        this.validatePassword = true;
      }
    }
    if (this.validatePassword && this.validateEmail) {
      this.validateForm = true;
    } else {
      this.openDialog();
    }
  }

  submit() {
    this.validateLogin();
    if (this.validateForm == true) {
      this.router.navigateByUrl('user');
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; //the user will not be able to close the dialog just by clicking outside of it
    dialogConfig.autoFocus = true; //the focus will be set automatically on the first form field of the dialog
    this.dialog.open(DialogComponent, dialogConfig);
  }
}
