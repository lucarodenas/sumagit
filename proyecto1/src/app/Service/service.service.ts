import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuario } from 'src/app/Modelo/usuario';
import { suma } from '../Modelo/suma';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  UrlUsuario = 'http://localhost:8080/usuarios';
  UrlSuma = 'http://localhost:8080/suma';

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getUsuarios() {
    return this.http.get<usuario[]>(this.UrlUsuario + '/listar');
  }

  addUsuario(u: usuario) {
    return this.http.post<usuario>(this.UrlUsuario + '/add', u, { headers: this.httpHeaders });
  }

  deleteUsuario(id: number) {
    return this.http.delete(this.UrlUsuario + '/delete/' + id);
  }

  addSuma(s: suma) {
    s.idusuario = 3;
    s.usu_creacion = "Luca";
    return this.http.post<suma>(this.UrlSuma + '/add' , s, { headers: this.httpHeaders });
  }

  getSumas() {
    return this.http.get<suma[]>(this.UrlSuma + '/listarSuma');
  }
}
