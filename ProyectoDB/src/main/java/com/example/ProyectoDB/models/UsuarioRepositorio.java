package com.example.ProyectoDB.models;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface UsuarioRepositorio extends Repository<Usuario, Integer>{
	List<Usuario>findAll();
	Usuario findById(int id);
	Usuario save(Usuario u);
	void deleteById(int id);
}
