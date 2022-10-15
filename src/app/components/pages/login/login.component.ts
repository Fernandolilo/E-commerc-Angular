import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'src/app/models/CredencialDTO';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  creds: CredenciaisDTO = {
    email: '',
    senha: '',
  };


  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    //console.log(this.creds);
    this.auth.authenticated(this.creds)
    .subscribe(response =>{
      console.log(response.headers.get('Authorization'));
    }, error =>{
      console.log(error);
    })
  }
}
