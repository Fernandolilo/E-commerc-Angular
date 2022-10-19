import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/app/config/API_CONFIG";
import { CredenciaisDTO } from "src/app/models/CredencialDTO";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {


  constructor(public http: HttpClient) {}
  authenticate(creds: CredenciaisDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
