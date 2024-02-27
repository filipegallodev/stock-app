package br.com.filipe.backendstockapp.v1.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sale_product")
public class SaleProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sale_id")
    private Long saleId;

    @Column(name = "product_customid")
    private String productCustomId;
    private Integer amount;

    public SaleProduct() {
    }

    public SaleProduct(Long saleId, String productCustomId, Integer amount) {
        this.saleId = saleId;
        this.productCustomId = productCustomId;
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

    public String getProductCustomId() {
        return productCustomId;
    }

    public void setProductCustomId(String productCustomId) {
        this.productCustomId = productCustomId;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}
