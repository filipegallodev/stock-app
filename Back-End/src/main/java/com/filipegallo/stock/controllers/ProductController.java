package com.filipegallo.stock.controllers;

import com.filipegallo.stock.dto.ProductDTO;
import com.filipegallo.stock.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/{id}")
    public ProductDTO findbyId(@PathVariable Long id) {
        ProductDTO result = productService.findById(id);
        return result;
    }
}
