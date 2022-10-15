import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { LoginComponent } from '../../components/pages/login/login.component';
import { AppMaterialModule } from '../material/App-material.module';
import { PathRoutingModule } from './path-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    PathRoutingModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]

})
export class PathModule { }
