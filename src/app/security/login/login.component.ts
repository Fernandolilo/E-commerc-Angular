import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CredenciaisDTO } from "src/app/models/CredencialDTO";
import { AuthService } from "src/app/services/auth.service";


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
    private toast: ToastrService
    ) {}

  ngOnInit(): void {

  }

  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.toast.success("Login efetuado com sucesso!")
      this.route.navigate(['home'], {relativeTo: this.activationRoute});
      }, error =>{
        this.toast.error(error);
      });
  }
}
