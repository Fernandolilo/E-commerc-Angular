import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CategoriaComponent } from 'src/app/components/pages/categoria/categoria.component';
import { NewCategoriaComponent } from 'src/app/components/pages/new-categoria/new-categoria.component';
import { LoginComponent } from 'src/app/security/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

import { CategoriaService } from 'src/app/services/categoria.service';

import { AppMaterialModule } from '../material/App-material.module';
import { HomeComponent } from './../../components/pages/home/home.component';
import { PathRoutingModule } from './path-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CategoriaComponent,
    NewCategoriaComponent

  ],
  imports: [
    CommonModule,
    PathRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    MatIconModule
  ],

  providers: [
    AuthService,
    CategoriaService
  ]

})
export class PathModule { }
