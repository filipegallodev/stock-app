package br.com.filipe.backendstockapp.v1.dto;

import br.com.filipe.backendstockapp.v1.model.SaleProduct;
import org.springframework.beans.BeanUtils;

public class SaleProductDTO {

    private Long id;
    private Long saleId;
    private String productId;
    private Integer amount;

    public SaleProductDTO() {
    }

    public SaleProductDTO(SaleProduct model) {
        BeanUtils.copyProperties(model, this);
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
