package br.com.filipe.backendstockapp.v1.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "sale")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customer;

    @Column(name = "total_price")
    private Double totalPrice;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Sale() {
    }

    public Sale(String customer, Double totalPrice, LocalDateTime createdAt) {
        this.customer = customer;
        this.totalPrice = totalPrice;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
