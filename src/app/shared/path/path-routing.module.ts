import { CategoriaResolver } from './../../components/pages/categoria/categoria.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from 'src/app/components/pages/categoria/categoria.component';
import { NewCategoriaComponent } from 'src/app/components/pages/new-categoria/new-categoria.component';
import { LoginComponent } from 'src/app/security/login/login.component';

import { HomeComponent } from './../../components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'home/categorias', component: CategoriaComponent },
  { path: 'home/categorias/newcategoria', component: NewCategoriaComponent, resolve: {categoria: CategoriaResolver} },
  { path: 'home/categorias/edit/:id', component: NewCategoriaComponent, resolve: {categoria: CategoriaResolver} },
  { path: 'home/categorias/delete/:id', component: NewCategoriaComponent, resolve: {categoria: CategoriaResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathRoutingModule {}
