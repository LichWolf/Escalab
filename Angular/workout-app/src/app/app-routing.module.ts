import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './feature/components/inicio.component';
import { LoginComponent } from './feature/login/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
