import { LoginComponent } from './../../components/pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathRoutingModule } from './path-routing.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PathRoutingModule
  ]
})
export class PathModule { }
