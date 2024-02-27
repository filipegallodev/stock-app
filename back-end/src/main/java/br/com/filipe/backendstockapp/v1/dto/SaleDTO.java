package br.com.filipe.backendstockapp.v1.dto;

import br.com.filipe.backendstockapp.v1.model.Sale;
import org.springframework.beans.BeanUtils;

import java.time.LocalDateTime;
import java.util.UUID;

public class SaleDTO {

    private Long id;
    private UUID customerId;
    private Double totalPrice;
    private LocalDateTime createdAt;

    public SaleDTO() {
    }

    public SaleDTO(Sale model) {
        BeanUtils.copyProperties(model, this);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UUID getCustomer() {
        return customerId;
    }

    public void setCustomer(UUID customerId) {
        this.customerId = customerId;
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
