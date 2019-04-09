import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/containers/login/login.component';
import {CoreModule} from './core/core.module';
import { RolesComponent } from './account/containers/roles/roles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
