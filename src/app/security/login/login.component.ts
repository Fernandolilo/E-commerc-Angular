import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activationRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.authenticate(this.creds).subscribe(
      (response) => {
        this.snackBar.open('Login efetuado com Sucesso!', '', {
          duration: 1500,
        });
        this.route.navigate(['home'], { relativeTo: this.activationRoute });
      },
      (error) => {
        this.snackBar.open('Email ou senha Inválido', '', { duration: 1500 });
      }
    );
  }
}
