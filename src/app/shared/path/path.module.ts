import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../../components/pages/login/login.component';
import { AppMaterialModule } from '../material/App-material.module';
import { PathRoutingModule } from './path-routing.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PathRoutingModule,
    AppMaterialModule

  ]
})
export class PathModule { }
