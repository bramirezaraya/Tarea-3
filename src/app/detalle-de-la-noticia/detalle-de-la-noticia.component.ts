import { Component, OnInit } from '@angular/core';

import {listaNoticias,Noticias} from "../interfaces/noticias"

import {ActivatedRoute,Route} from "@angular/router";
import {Categorias,listaCategorias} from "../interfaces/categorias"

@Component({  
  selector: 'app-detalle-de-la-noticia',
  templateUrl: './detalle-de-la-noticia.component.html',
  styleUrls: ['./detalle-de-la-noticia.component.scss']
})
export class DetalleDeLaNoticiaComponent implements OnInit {

  listaNoticias = listaNoticias;
  noticias:any;
  categorias:any;

  id:number=0;


  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=> {
      this.id=datos["id"];
    })
   }

  ngOnInit(): void {

    this.noticias = listaNoticias.find(objeto=> objeto.id==this.id);
    this.categorias= listaCategorias.find(objeto => objeto.idCategoria== this.noticias.idCategoria)
  }

}
