import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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


  constructor(
    private auth: AuthService,
    private route: Router,
    private activationRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {}

  login() {
    //console.log(this.creds);
    this.auth.authenticated(this.creds)
    .subscribe(response =>{
      console.log(response.headers.get('Authorization'));
      this.route.navigate(['home'], {relativeTo: this.activationRoute});


    }, error =>{
      console.log(error);
    })
  }
}
