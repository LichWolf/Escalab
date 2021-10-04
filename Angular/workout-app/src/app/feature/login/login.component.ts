import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm: boolean = false;
  isLoging: boolean = false;
  loginForm!: FormGroup;
  userData: string | undefined;
  userID: number | undefined;

  constructor(
    private _LoginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      clave: [''],
    });
  }

  public async validateUser() {
    let email = this.loginForm.value.email;
    let respone = await this._LoginService.getUser(email);
    let clave = this.loginForm.value.clave;
    localStorage.setItem('user', respone[0].UserID);
    localStorage.setItem('email', email);
    if (email == respone[0].email && clave == respone[0].clave) {
      this.authService.login();
      this.validateForm = true;
      this.router.navigateByUrl('user/profile');
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; //the user will not be able to close the dialog just by clicking outside of it
    dialogConfig.autoFocus = true; //the focus will be set automatically on the first form field of the dialog
    this.dialog.open(DialogComponent, dialogConfig);
  }
}
