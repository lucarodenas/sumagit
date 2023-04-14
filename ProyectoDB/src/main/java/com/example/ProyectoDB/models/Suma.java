package com.example.ProyectoDB.models;


import java.io.Serializable;
import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "suma")
public class Suma implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    private int id;
    private int primernumero;
    private int segundonumero;
    private int suma;
    private int idusuario;
    private String usu_creacion;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPrimernumero() {
		return primernumero;
	}
	public void setPrimernumero(int primernumero) {
		this.primernumero = primernumero;
	}
	public int getSegundonumero() {
		return segundonumero;
	}
	public void setSegundonumero(int segundonumero) {
		this.segundonumero = segundonumero;
	}
	public int getSuma() {
		return suma;
	}
	public void setSuma(int suma) {
		this.suma = suma;
	}
	public int getIdusuario() {
		return idusuario;
	}
	public void setIdusuario(int idusuario) {
		this.idusuario = idusuario;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getUsu_creacion() {
		return usu_creacion;
	}
	public void setUsu_creacion(String usu_creacion) {
		this.usu_creacion = usu_creacion;
	}
    
    
}
