package br.com.filipe.backendstockapp.v1.dto;

import br.com.filipe.backendstockapp.v1.model.Product;
import org.springframework.beans.BeanUtils;

import java.util.UUID;

public class ProductDTO {

    private UUID id;
    private String customId;
    private String name;
    private Integer amount;

    public ProductDTO() {
    }

    public ProductDTO(Product model) {
        BeanUtils.copyProperties(model, this);
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getCustomId() {
        return customId;
    }

    public void setCustomId(String customId) {
        this.customId = customId;
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