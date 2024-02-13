package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/{customId}")
    public ResponseEntity<?> findProductById(@PathVariable String customId) {
        ProductDTO result = productService.findById(customId);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<ProductDTO>> findAllProducts() {
        List<ProductDTO> productDTO = productService.findAllProducts();
        return ResponseEntity.status(HttpStatus.OK).body(productDTO);
    }

    @PostMapping(value = "/addProduct")
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }
}
