package br.com.filipe.backendstockapp.v1.model;

public class Product {

    private String name;
    private Integer amount;

    public Product(String name, Integer amount) {
        this.name = name;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public Integer getAmount() {
        return amount;
    }
}
