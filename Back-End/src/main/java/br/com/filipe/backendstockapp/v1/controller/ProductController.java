package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value ="/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/{id}")
    public ProductDTO getProduct(@PathVariable Long id) {
        ProductDTO result = productService.findById(id);
        return result;
    }

    @PostMapping(value = "/addProduct")
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }
}
