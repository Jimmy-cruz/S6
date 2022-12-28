import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './modulos/pages/contactos/contactos.component';
import { InicioComponent } from './modulos/pages/inicio/inicio.component';
import { NosotrosComponent } from './modulos/pages/nosotros/nosotros.component';
import { ServiciosComponent } from './modulos/pages/servicios/servicios.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'nosotros', component: NosotrosComponent}, 
  {path:'servicios', component: ServiciosComponent},
  {path:'contactos', component: ContactosComponent},
  {path:'**', pathMatch: 'full', redirectTo:'home'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
