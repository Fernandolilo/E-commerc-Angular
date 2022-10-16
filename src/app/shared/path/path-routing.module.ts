import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from 'src/app/components/pages/categoria/categoria.component';

import { LoginComponent } from '../../components/pages/login/login.component';
import { HomeComponent } from './../../components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/categoria', component: CategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathRoutingModule {}
