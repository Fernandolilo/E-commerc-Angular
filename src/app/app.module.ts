import { CategoriaService } from './services/categoria.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AppMaterialModule } from './shared/material/App-material.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports:
  [ BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    CategoriaService

  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
