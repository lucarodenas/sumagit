import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuario } from 'src/app/Modelo/usuario';
import { suma } from '../Modelo/suma';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/usuarios';

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getUsuarios() {
    return this.http.get<usuario[]>(this.Url + '/listar');
  }

  addUsuario(u: usuario){
    return this.http.post<usuario>(this.Url + '/add', u, { headers: this.httpHeaders });
  }

  deleteUsuario(id: number){
    return this.http.delete(this.Url + '/delete/'+ id);
  }

  addSuma(s: suma){
    s.idusuario = 3;
    s.usu_creacion = "Luca";
    return this.http.post<suma>(this.Url + '/suma', s, { headers: this.httpHeaders });
  }
}
