import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaDTO } from 'src/app/models/categoriaDTO';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  itemCat: CategoriaDTO[] = [];

  readonly displayedColumns = ['nome', 'actions'];

  constructor(
    private categoriaService: CategoriaService,
    private route: Router,
    private activationRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.itemCat = response;

      },
      error => {});

  }

  onAdd(){
    this.route.navigate(['newcategoria'], {relativeTo: this.activationRoute});
  }

  onEdit(){

  }

  onDelete(){

  }

}

