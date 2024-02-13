package br.com.filipe.backendstockapp.v1.exception;

public class UserAlreadyExistsException extends RuntimeException {

    public UserAlreadyExistsException() {
        super("Este nome de usuário já está em uso!");
    }
}
