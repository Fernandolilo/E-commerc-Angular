import { API_CONFIG } from './../config/API_CONFIG';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { CategoriaDTO } from '../models/categoriaDTO';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<CategoriaDTO[]> {
    return this.http
      .get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`)
      .pipe(first());
  }

  create(categoria: Partial<CategoriaDTO>) {
    if (categoria.id) {
      console.log(categoria);
      return this.update(categoria);
    }
    return this.save(categoria);
  }

  findById(id: string) {
    return this.http.get<CategoriaDTO>(
      `${API_CONFIG.baseUrl}/categorias/${id}`
    );
  }

  private save(categoria: Partial<CategoriaDTO>) {
    return this.http
      .post(`${API_CONFIG.baseUrl}/categorias`, categoria)
      .pipe(first());
  }

  private update(categoria: Partial<CategoriaDTO>) {
    return this.http.put<CategoriaDTO>(
      `${API_CONFIG.baseUrl}/categorias/${categoria.id}`,
      categoria
    );
  }

  public delete(categoria: Partial<CategoriaDTO>) {
     return this.http.delete<CategoriaDTO>(
        `${API_CONFIG.baseUrl}/categorias/${categoria.id}`
      ).pipe(
        first()
      );
  }
}
