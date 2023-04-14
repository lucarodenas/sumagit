package com.example.ProyectoDB.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoDB.models.Usuario;
import com.example.ProyectoDB.models.Suma;
import com.example.ProyectoDB.models.UsuarioService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping({ "/usuarios" })
public class UsuarioController {

	@Autowired
	UsuarioService service;

	@GetMapping("/listar")
	public List<Usuario> listar() {
		return service.listar();
	}
	
	@PostMapping("/add")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario add(@RequestBody Usuario usuario) {
		return service.save(usuario);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
	
	@PostMapping("/suma")
	@ResponseStatus(HttpStatus.CREATED)
	public Suma add(@RequestBody Suma suma) {
		return service.save(suma);
	}
}
