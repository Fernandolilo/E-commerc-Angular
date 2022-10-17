import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

import { CategoriaDTO } from './../../../models/categoriaDTO';

@Component({
  selector: 'app-new-categoria',
  templateUrl: './new-categoria.component.html',
  styleUrls: ['./new-categoria.component.scss'],
})
export class NewCategoriaComponent implements OnInit {

  formulario = this.formBuilder.group({
      nome: ['']
  })



  //para usar a class select importante inicializar
  disableSelect = new FormControl(false);

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CategoriaService,
    private snackBar: MatSnackBar,
    private route: Router,
    private activationRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const categoria: CategoriaDTO = this.activationRoute.snapshot.data['categoria']
    this.formulario.setValue({
      nome: categoria.nome
    })
  }


  private onSucess() {
    this.snackBar.open('Salvo com Sucesso!', '', { duration: 1500 });
  }
  private onError() {
    this.snackBar.open('Erro ao salvar categoria', '', { duration: 3000 });
  }

  onSubmit() {
    this.service.create(this.formulario.value).subscribe(
      next =>{
        this.onSucess();
      }
    )
  }

}
