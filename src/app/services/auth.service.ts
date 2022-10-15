import { API_CONFIG } from './../config/API_CONFIG';
import { CredenciaisDTO } from 'src/app/models/CredencialDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  authenticated(creds: CredenciaisDTO){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds,{
      observe: 'response',
      responseType: 'text'
    });
  }
}
