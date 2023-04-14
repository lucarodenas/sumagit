package com.example.ProyectoDB.models;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuarioServiceImp implements UsuarioService{
	
	@Autowired
	private UsuarioRepositorio repositorio;
	
	@Override
	public List<Usuario> listar() {
		return repositorio.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Usuario listarId(int id) {
		return repositorio.findById(id);
	} 

	@Override
	@Transactional
	public Usuario save(Usuario usuario) {
		return repositorio.save(usuario);
	}


	@Override
	public Suma save(Suma suma) {
		return repositorio.save(suma);
	}

	@Override
	public void delete(int id) {
		repositorio.deleteById(id);
		
	}
	
}
