import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
})
export class AppMaterialModule { }
