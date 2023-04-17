package com.example.ProyectoDB.models;

import java.util.List;

public interface UsuarioService {
	List<Usuario> listar();

	Usuario listarId(int id);

	Usuario save(Usuario u);

	void delete(int id);
}
