package br.com.filipe.backendstockapp.v1.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sale_product")
public class SaleProduct {

    @Id
    private Long id;

    @Column(name = "sale_id")
    private Long saleId;

    @Column(name = "product_id")
    private String productId;
    private Integer amount;

    public SaleProduct() {
    }

    public SaleProduct(Long id, Long saleId, String productId, Integer amount) {
        this.id = id;
        this.saleId = saleId;
        this.productId = productId;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSaleId() {
        return saleId;
    }

    public void setSaleId(Long saleId) {
        this.saleId = saleId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}
