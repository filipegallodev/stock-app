package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/{name}")
    public Product getProduct(@PathVariable String name) {
        return productService.findByName(name);
    }

    @PostMapping(value = "/addProduct")
    public String addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return "Produto adicionado com sucesso!";
    }
}
