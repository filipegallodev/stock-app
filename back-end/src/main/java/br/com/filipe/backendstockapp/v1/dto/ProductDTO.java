package br.com.filipe.backendstockapp.v1.dto;

import br.com.filipe.backendstockapp.v1.model.Product;
import org.springframework.beans.BeanUtils;

public class ProductDTO {

    private Long id;
    private String customId;
    private String name;
    private Integer amount;

    public ProductDTO() {
    }

    public ProductDTO(Product model) {
        BeanUtils.copyProperties(model, this);
    }

    public Long getId() {
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