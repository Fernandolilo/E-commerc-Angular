import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public btn: boolean = true;
  constructor(
    private route: Router,
    private activationRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  onCategoria(){
    this.route.navigate(['categorias'], {relativeTo: this.activationRoute});
  }

}
