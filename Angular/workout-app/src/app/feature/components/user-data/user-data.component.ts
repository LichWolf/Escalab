import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: [''],
      secondName: [''],
      lastName: [''],
      secondLastName: [''],
      region: [''],
      state: [''],
      direction: [''],
      department: [''],
    });
  }
  submit() {
    console.log('vacio');
  }
}
