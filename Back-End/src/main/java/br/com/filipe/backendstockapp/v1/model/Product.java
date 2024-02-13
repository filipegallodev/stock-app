package br.com.filipe.backendstockapp.v1.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "custom_id")
    private String customId;
    private String name;
    private Integer amount;

    public Product() {
    }

    public Product(String customId, String name, Integer amount) {
        this.customId = customId;
        this.name = name;
        this.amount = amount;
    }

    public UUID getId() {
        return id;
    }

    public String getCustomId() {
        return customId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}