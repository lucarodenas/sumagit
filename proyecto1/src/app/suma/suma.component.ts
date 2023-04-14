import { Component } from '@angular/core';
import { suma } from 'src/app/Modelo/suma';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  s: suma = new suma();
  
  constructor(private service: ServiceService) { }
  num1: number = 0;
  num2: number = 0;
  suma: number = 0;

  sumar() {
    this.suma = this.num1 + this.num2;
    this.s.primernumero = this.num1;
    this.s.segundonumero = this.num2;
    this.s.suma = this.suma;
    this.service.addSuma(this.s).subscribe();
  }
}
