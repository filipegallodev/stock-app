package br.com.filipe.backendstockapp.v1.dto;

import br.com.filipe.backendstockapp.v1.model.Customer;
import org.springframework.beans.BeanUtils;

import java.util.UUID;

public class CustomerDTO {

    private UUID id;
    private String username;
    private String password;
    private String name;

    public CustomerDTO() {
    }

    public CustomerDTO(Customer model) {
        BeanUtils.copyProperties(model, this);
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
