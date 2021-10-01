import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  userName: string = 'Juan';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
  profile() {
    this.router.navigateByUrl('user/profile');
  }
}
