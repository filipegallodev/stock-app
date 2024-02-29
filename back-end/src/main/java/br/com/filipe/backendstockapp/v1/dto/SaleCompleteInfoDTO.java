package br.com.filipe.backendstockapp.v1.dto;

import java.util.List;

public class SaleCompleteInfoDTO {

    private SaleDTO sale;
    private CustomerDTO customer;
    private List<ProductDTO> productList;

    public SaleCompleteInfoDTO(SaleDTO sale, CustomerDTO customer, List<ProductDTO> productList) {
        this.sale = sale;
        this.customer = customer;
        this.productList = productList;
    }

    public SaleDTO getSale() {
        return sale;
    }

    public void setSale(SaleDTO sale) {
        this.sale = sale;
    }

    public CustomerDTO getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDTO customer) {
        this.customer = customer;
    }

    public List<ProductDTO> getProductList() {
        return productList;
    }

    public void setProductList(List<ProductDTO> productList) {
        this.productList = productList;
    }
}
