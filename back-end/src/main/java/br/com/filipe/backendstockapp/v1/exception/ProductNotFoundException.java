package br.com.filipe.backendstockapp.v1.exception;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException() {
        super("Produto não encontrado!");
    }
}
