package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.dto.UserDTO;
import br.com.filipe.backendstockapp.v1.exception.ProductNotFoundException;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.model.User;
import br.com.filipe.backendstockapp.v1.response.ErrorResponse;
import br.com.filipe.backendstockapp.v1.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(value ="/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findProductById(@PathVariable Long id) {
        try {
            ProductDTO result = productService.findById(id);
            return ResponseEntity.ok(result);
        } catch (ProductNotFoundException e) {
            ErrorResponse errorResponse = new ErrorResponse(
                    HttpStatus.NOT_FOUND.value(),
                    e.getMessage());

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
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
