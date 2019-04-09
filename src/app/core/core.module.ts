import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';

import { CoreRoutingModule } from './core-routing.module';


import { AppContainerComponent } from './containers/app/app.container';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    CoreRoutingModule
  ],
  declarations: [
    AppContainerComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
  ],
  exports: [
    AppContainerComponent,
  ],
  providers: [],
  entryComponents: []
})
export class CoreModule {
}
