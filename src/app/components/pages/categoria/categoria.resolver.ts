import { CategoriaDTO } from './../../../models/categoriaDTO';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaResolver implements Resolve<CategoriaDTO> {

  constructor(private service: CategoriaService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoriaDTO> {
    if(route.params && route.params['id']){
      return this.service.findById(route.params['id']);
    }
    return of({id: '', nome: ''});
  }
}
