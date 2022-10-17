import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { API_CONFIG } from '../config/API_CONFIG';
import { CategoriaDTO } from '../models/categoriaDTO';


@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  private api = API_CONFIG;

  findAll(): Observable<CategoriaDTO[]> {
    return this.http
      .get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`)
      .pipe(first());
  }

  create(categoria: Partial<CategoriaDTO>){
      return this.http.post(`${API_CONFIG.baseUrl}/categorias`, categoria,{
        observe: 'response',
        responseType: 'text'
    })

  }
}
