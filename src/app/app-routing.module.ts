import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  
  {path:"", component:InicioComponent},
  {path:"contact", component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
