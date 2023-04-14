import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/Modelo/usuario';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  u: usuario = new usuario();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
  }

  add(): void {
    this.service.addUsuario(this.u).subscribe(
      response => this.router.navigate(['/listar'])
    );
  }
}
