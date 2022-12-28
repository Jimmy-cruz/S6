import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
