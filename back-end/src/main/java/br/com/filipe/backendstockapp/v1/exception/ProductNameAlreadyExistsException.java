package br.com.filipe.backendstockapp.v1.exception;

public class ProductNameAlreadyExistsException extends RuntimeException{

    public ProductNameAlreadyExistsException() {
        super("Já existe um produto cadastrado com este nome!");
    }
}
