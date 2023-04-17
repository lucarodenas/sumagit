package com.example.ProyectoDB.models;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SumaServiceImp implements SumaService{
	
	@Autowired 
	SumaRepositorio repositorio;
	
	@Override
	public List<Suma> listar() {
		return repositorio.findAll();
	}
	
	@Override
	public Suma save(Suma suma) {
		return repositorio.save(suma);
	}

	
}
