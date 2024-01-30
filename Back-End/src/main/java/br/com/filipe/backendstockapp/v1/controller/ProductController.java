package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.exception.ProductNotFoundException;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.response.ErrorResponse;
import br.com.filipe.backendstockapp.v1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping(value ="/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Long id) {
        try {
            ProductDTO result = productService.findById(id);
            return ResponseEntity.ok(result);
        } catch (ProductNotFoundException e) {
            ErrorResponse errorResponse = new ErrorResponse(
                    HttpStatus.NOT_FOUND.value(),
                    e.getMessage(),
                    LocalDateTime.now());

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }

    @PostMapping(value = "/addProduct")
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }
}
