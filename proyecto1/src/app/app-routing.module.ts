import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { ListarSumasComponent } from './Suma/listar-sumas/listar-sumas.component';
import { AddComponent } from './Usuario/add/add.component';
import { DeleteComponent } from './Usuario/delete/delete.component';
import { SumaComponent } from './Suma/sumar/suma.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent},
  {path: 'delete', component:DeleteComponent},
  {path: 'listarSuma', component:ListarSumasComponent},
  {path: 'suma', component:SumaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
