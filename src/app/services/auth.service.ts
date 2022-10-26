import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from 'src/app/config/API_CONFIG';
import { CredenciaisDTO } from 'src/app/models/CredencialDTO';


const helper = new JwtHelperService();
const decodedToken = helper.decodeToken();
const expirationDate = helper.getTokenExpirationDate();
const isExpired = helper.isTokenExpired();

@Injectable()
export class AuthService {
  [x: string]: any;


  constructor(public http: HttpClient) {}

 authenticate(creds: CredenciaisDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'json',
    });
  }


}
