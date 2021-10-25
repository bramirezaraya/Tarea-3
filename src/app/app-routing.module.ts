import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import {ContactComponent} from './contact/contact.component';
import {DetalleDeLaNoticiaComponent} from "../app/detalle-de-la-noticia/detalle-de-la-noticia.component"

const routes: Routes = [
  
  {path:"", component:InicioComponent},
  {path:"contact", component:ContactComponent},
  {path:"detalleNoticia/:id", component:DetalleDeLaNoticiaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
