import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  userName: string = 'Juan';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    this.router.navigateByUrl('');
  }
}
