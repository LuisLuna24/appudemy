import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  personas:Persona[]=[new Persona('Juan','Perez'),new Persona('Fernanda','Gonzalez')];

  nombreImpit='';

  apellidoImpit='';

  agregarPersona(){
    let persona1=new Persona(this.nombreImpit,this.apellidoImpit);
    this.personas.push(persona1)
  }
}
