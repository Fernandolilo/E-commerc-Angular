import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/API_CONFIG';
import { CredenciaisDTO } from 'src/app/models/CredencialDTO';


@Injectable()
export class AuthService {

  constructor(public http: HttpClient) {}

  authenticate(creds: CredenciaisDTO): Observable<any> {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'json',
    }).pipe(map((data) => this.setTokenLocalStorage(data)),
    catchError((error) => {
      this.removeTokenLocalStorage();
      throw 'Falha ao autenticar, EMAIL/SENHA'
    }))
  }

  public getToken(): string | null{
      return localStorage.getItem(API_CONFIG.token);
  }


  private setTokenLocalStorage(response: any){
      const {type, token, } = response;
      localStorage.setItem(API_CONFIG.token, token);
  }

  private removeTokenLocalStorage(): void{
    localStorage.removeItem(API_CONFIG.token);
  }

}
