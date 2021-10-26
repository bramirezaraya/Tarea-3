import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  activarMsg:boolean=false;
  formulario:FormGroup;
  constructor(public FormB:FormBuilder) {

    this.formulario=FormB.group({
      nombre:["", Validators.required],
      telefono:["", Validators.required],
      mensaje:["", Validators.required],
      correo:["",Validators.required],
      dirigido:["",Validators.required]
      
    })
   }

  ngOnInit(): void {
  }

  validacion(){ //recibimos los datos 
    console.log(this.formulario.value);

    this.activarMsg=true;
  }
}
