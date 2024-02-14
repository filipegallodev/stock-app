package br.com.filipe.backendstockapp.v1.exception;

public class ProductIDAlreadyExistsException extends RuntimeException{

    public ProductIDAlreadyExistsException() {
        super("Já existe um produto cadastrado com este ID!");
    }
}
