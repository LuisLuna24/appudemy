import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  { path: 'Calculadora', component: PrincipalComponent },
  { path: 'Listado', component: ListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
