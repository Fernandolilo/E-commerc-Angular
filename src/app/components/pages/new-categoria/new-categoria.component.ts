import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Location } from '@angular/common';
import { CategoriaDTO } from './../../../models/categoriaDTO';

@Component({
  selector: 'app-new-categoria',
  templateUrl: './new-categoria.component.html',
  styleUrls: ['./new-categoria.component.scss'],
})
export class NewCategoriaComponent implements OnInit {
  categorias: CategoriaDTO | any;

  item: CategoriaDTO [] = [];

  formulario = this.formBuilder.group({
    id: [''],
    nome: [''],
  });

  //para usar a class select importante inicializar
  disableSelect = new FormControl(false);

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CategoriaService,
    private snackBar: MatSnackBar,
    private route: Router,
    private location: Location,
    private activationRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const categoria: CategoriaDTO =
      this.activationRoute.snapshot.data['categoria'];
    this.formulario.setValue({
      id: categoria.id,
      nome: categoria.nome,
    });
  }

  private onSucess() {
    this.snackBar.open('Salvo com Sucesso!', '', { duration: 1500 });
    this.location.back();
  }
  private onError() {
    this.snackBar.open('Erro ao salvar categoria', '', { duration: 3000 });
  }

  private onDel(){
    this.snackBar.open('Deletado com sucesso!', '', { duration: 3000 });
    this.location.back();
  }

  onSubmit() {
    this.service.create(this.formulario.value).subscribe(
      (next) => {
        this.onSucess();
      },
      (error) => {
        this.onError();
      }
    );
  }

  onDelete(id: CategoriaDTO) {
   this.service.delete(this.formulario.value)
    .subscribe(next => {
      this.onDel();
    });
   ;
  }
}
