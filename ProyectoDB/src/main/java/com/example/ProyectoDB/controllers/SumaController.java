package com.example.ProyectoDB.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoDB.models.Suma;
import com.example.ProyectoDB.models.SumaService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping({ "/suma" })
public class SumaController {
	
	@Autowired
	SumaService service;
	
	@GetMapping("/listarSuma")
	public List<Suma> listar() {
		return service.listar();
	}
	
	@PostMapping("/add")
	@ResponseStatus(HttpStatus.CREATED)
	public Suma add(@RequestBody Suma suma) {
		return service.save(suma);
	}
}
