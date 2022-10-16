import { Component, OnInit } from '@angular/core';
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

  constructor(private categoriaService: CategoriaService) {

  }

  ngOnInit(): void {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.itemCat = response;

      },
      error => {});

  }

  onAdd(){
  }

  onEdit(){

  }

  onDelete(){

  }

}

