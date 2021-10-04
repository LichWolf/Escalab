import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { RutinaService } from 'src/app/services/rutinas.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  public userName: string = '';
  public sideBarData: any[string];
  public month: string[] = ['enero', 'febrero', 'marzo'];
  public muscle: string[] = ['femoral', 'pectoral', 'gluteos'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private _RutinaService: RutinaService,
    private _LoginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getRutinasData();
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
  profile() {
    this.router.navigateByUrl('user/profile');
  }
  async getRutinasData() {
    this.sideBarData = await this._RutinaService.getRutinas();
  }
  async assingUserName() {}

  exercise() {
    this.router.navigateByUrl('user/profile/excercise');
  }
}
