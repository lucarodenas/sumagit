package com.example.ProyectoDB.models;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface SumaRepositorio extends Repository<Suma, Integer>{
	List<Suma>findAll();
	Suma save(Suma s);
}
