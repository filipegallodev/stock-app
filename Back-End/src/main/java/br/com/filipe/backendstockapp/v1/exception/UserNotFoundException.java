package br.com.filipe.backendstockapp.v1.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException() {
        super("Usuário não encontrado.");
    }
}