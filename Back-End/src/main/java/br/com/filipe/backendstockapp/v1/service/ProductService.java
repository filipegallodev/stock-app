package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.exception.NoRegisteredProducts;
import br.com.filipe.backendstockapp.v1.exception.ProductNotFoundException;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Transactional(readOnly = true)
    public ProductDTO findById(Long id) {
        Optional<Product> res = productRepository.findById(id);
        verifyIfProductExists(res);
        return new ProductDTO(res.get());
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> findAllProducts() {
        List<Product> res = productRepository.findAll();
        verifyIfListIsEmpty(res);
        return res.stream().map(ProductDTO::new).toList();
    }

    public void addProduct(Product product) {
        productRepository.save(product);
    }

    public void verifyIfProductExists(Optional<Product> res) {
        if (!res.isPresent()) {
            throw new ProductNotFoundException();
        }
    }

    public void verifyIfListIsEmpty(List<Product> res) {
        if (res.isEmpty()) {
            throw new NoRegisteredProducts();
        }
    }
}
