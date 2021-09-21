import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './feature/login/login.component';
import { LoginModule } from './feature/login/login.module';
import { InicioComponent } from './feature/components/inicio.component';
import { SideMenuComponent } from './feature/components/side-bar-menu/side-menu.component';
import { UserDataComponent } from './feature/components/user-data/user-data.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    LoginComponent,
    InicioComponent,
    SideMenuComponent,
    UserDataComponent,
    DialogComponent,
  ],
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
