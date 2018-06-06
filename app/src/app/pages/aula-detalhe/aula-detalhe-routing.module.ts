import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaDetalheComponent } from './aula-detalhe.component';

const routes: Routes = [
  { path: '', component: AulaDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaDetalheRoutingModule { }
