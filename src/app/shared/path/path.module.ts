import { Router, RouterModule } from '@angular/router';
import { CategoriaComponent } from 'src/app/components/pages/categoria/categoria.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';

import { LoginComponent } from '../../components/pages/login/login.component';
import { AppMaterialModule } from '../material/App-material.module';
import { HomeComponent } from './../../components/pages/home/home.component';
import { PathRoutingModule } from './path-routing.module';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CategoriaComponent

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
