package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="/product")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/{customId}")
    public ResponseEntity<ProductDTO> findProductById(@PathVariable String customId) {
        ProductDTO result = productService.findByCustomId(customId);
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<ProductDTO>> findAllProducts() {
        List<ProductDTO> listProductDTO = productService.findAllProducts();
        return ResponseEntity.status(HttpStatus.OK).body(listProductDTO);
    }

    @PostMapping(value = "/create")
    public void createProduct(@RequestBody Product product) {
        productService.createProduct(product);
    }

    @DeleteMapping(value = "/delete/{customId}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable String customId) {
        productService.deleteProduct(customId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
