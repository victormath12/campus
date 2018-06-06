import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoDetalheRoutingModule } from './curso-detalhe-routing.module';
import { CursoDetalheComponent } from './curso-detalhe.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CursoDetalheRoutingModule,
    SharedModule
  ],
  declarations: [CursoDetalheComponent]
})
export class CursoDetalheModule { }
