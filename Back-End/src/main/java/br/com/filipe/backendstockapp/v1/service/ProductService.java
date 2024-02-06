package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.exception.ProductNotFoundException;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        if (res.isPresent()) {
            return new ProductDTO(res.get());
        } else {
            throw new ProductNotFoundException("Produto com ID " + id + " não encontrado!");
        }
    }

    public void addProduct(Product product) {
        productRepository.save(product);
    }
}
