import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: 'cursos', loadChildren: 'app/pages/cursos/cursos.module#CursosModule' },
  { path: 'curso-detalhe', loadChildren: 'app/pages/curso-detalhe/curso-detalhe.module#CursoDetalheModule' },
  { path: 'aula-detalhe', loadChildren: 'app/pages/aula-detalhe/aula-detalhe.module#AulaDetalheModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
