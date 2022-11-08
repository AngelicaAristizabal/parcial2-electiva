import { Component, OnInit } from '@angular/core';
import { dataCrud } from './model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }
  ListaEstudiantes: dataCrud[] = [ ];

  Estudiantes = new dataCrud();

  save(){
    this.Estudiantes.id = this.ListaEstudiantes.length + 1;
    this.ListaEstudiantes.push(this.Estudiantes);
    this.Estudiantes = {};
  }
  ngOnInit(): void {
  }

}
