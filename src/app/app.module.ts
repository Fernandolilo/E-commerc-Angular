import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AppMaterialModule } from './shared/material/App-material.module';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [AppComponent],
  imports:
  [ BrowserModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
