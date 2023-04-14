import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {

  id!: number;
  constructor(private service: ServiceService, private router: Router) { }
  
  ngOnInit() {
  }
  
  delete(): void {
    this.service.deleteUsuario(this.id).subscribe(
      response => this.router.navigate(['/listar'])
    );
  }
}
