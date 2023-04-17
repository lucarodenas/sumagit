import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyecto1';
  
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Add(){
    this.router.navigate(["add"]);
  }

  Delete(){
    this.router.navigate(["delete"]);
  }

  Sumar(){
    this.router.navigate(["suma"]);
  }

  ListarSumas(){
    this.router.navigate(["listarSuma"]);
  }
}
