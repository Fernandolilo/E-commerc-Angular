import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from 'src/app/models/CredencialDTO';

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

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.creds);

  }
}
