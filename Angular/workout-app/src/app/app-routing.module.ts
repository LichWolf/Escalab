import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './feature/components/inicio.component';
import { LoginComponent } from './feature/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: InicioComponent, canActivate: [AuthGuard] },
  {
    path: 'user/profile',
    component: InicioComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
