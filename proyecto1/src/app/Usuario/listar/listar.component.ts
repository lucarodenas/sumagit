import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service'
import { usuario } from 'src/app/Modelo/usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  usuarios!: usuario[];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getUsuarios().subscribe(
      data => {
        this.usuarios = data
      })
  }
}
