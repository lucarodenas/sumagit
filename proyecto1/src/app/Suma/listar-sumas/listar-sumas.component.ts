import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../../Service/service.service'
import { suma } from 'src/app/Modelo/suma';

@Component({
  selector: 'app-listar-sumas',
  templateUrl: './listar-sumas.component.html',
  styleUrls: ['./listar-sumas.component.css']
})
export class ListarSumasComponent implements OnInit {

  sumas!: suma[];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getSumas().subscribe(
      data => {
        this.sumas = data;
      });
  }


}
