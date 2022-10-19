
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from 'src/app/components/pages/categoria/categoria.component';
import { NewCategoriaComponent } from 'src/app/components/pages/new-categoria/new-categoria.component';
import { LoginComponent } from 'src/app/security/login/login.component';


import { HomeComponent } from './../../components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/categoria', component: CategoriaComponent },
  { path: 'home/categoria/newcategoria', component: NewCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathRoutingModule {}
