import { Component, OnInit } from '@angular/core';
import{listaNoticias} from "../interfaces/noticias"

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  listaNoticias = listaNoticias;
  constructor() { }

  ngOnInit(): void {
  }

}
