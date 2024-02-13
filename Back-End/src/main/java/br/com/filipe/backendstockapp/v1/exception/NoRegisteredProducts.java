package br.com.filipe.backendstockapp.v1.exception;

public class NoRegisteredProducts extends RuntimeException{

    public NoRegisteredProducts() {
        super("Não existe produtos cadastrados.");
    }
}
