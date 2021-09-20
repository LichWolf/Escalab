import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './feature/login/login/login.component';
import { LoginModule } from './feature/login/login/login.module';
import { InicioComponent } from './feature/components/inicio.component';

@NgModule({
  declarations: [AppComponent, CoreComponent, LoginComponent, InicioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
