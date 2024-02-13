package br.com.filipe.backendstockapp.v1.exception;

public class PasswordNotMatchesException extends RuntimeException {

    public PasswordNotMatchesException() {
        super("Senha incorreta.");
    }
}
