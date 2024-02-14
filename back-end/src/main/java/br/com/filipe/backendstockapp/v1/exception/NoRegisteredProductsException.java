package br.com.filipe.backendstockapp.v1.exception;

public class NoRegisteredProductsException extends RuntimeException{

    public NoRegisteredProductsException() {
        super("Não existe produtos cadastrados.");
    }
}
