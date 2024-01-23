package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private List<Product> products;

    public ProductService(List<Product> products) {
        this.products = products;
    }

    public Product findByName(String name) {
        return products.stream().filter(product1 -> name.equals(product1.getName())).findAny().orElse(null);
    }

    public void addProduct(Product newProduct) {
        products.add(newProduct);
    }
}
