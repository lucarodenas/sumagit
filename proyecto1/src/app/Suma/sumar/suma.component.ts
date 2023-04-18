import { Component } from '@angular/core';
import { suma } from 'src/app/Modelo/suma';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  s: suma = new suma();
  
  constructor(private service: ServiceService, private router: Router) { }
  num1: number = 0;
  num2: number = 0;
  suma: number = 0;
  id: number = 0;
  nombre: string = "";

  sumar() {
    this.suma = this.num1 + this.num2;
    this.s.primernumero = this.num1;
    this.s.segundonumero = this.num2;
    this.s.suma = this.suma;
    this.s.idusuario = this.id;
    this.s.usu_creacion = this.nombre;
    this.service.addSuma(this.s).subscribe(
      response => this.router.navigate(['/listarSuma'])
    );
  }
}
