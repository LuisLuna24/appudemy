import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  mostrar=false;
  resultado=0;
  numero01=0;
  numero02=0; 
  Sumar(){
    this.resultado=this.numero01+this.numero02;
    this.mostrar=true;
  }
}
