package br.com.filipe.backendstockapp.v1.exception;

public class UserAlreadyExists extends RuntimeException {

    public UserAlreadyExists() {
        super("Este nome de usuário já está em uso!");
    }
}
