import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulaDetalheRoutingModule } from './aula-detalhe-routing.module';
import { AulaDetalheComponent } from './aula-detalhe.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AulaDetalheRoutingModule,
    SharedModule
  ],
  declarations: [AulaDetalheComponent]
})
export class AulaDetalheModule { }
