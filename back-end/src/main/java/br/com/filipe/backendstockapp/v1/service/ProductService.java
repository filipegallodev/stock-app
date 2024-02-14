package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.exception.NoRegisteredProductsException;
import br.com.filipe.backendstockapp.v1.exception.ProductIDAlreadyExistsException;
import br.com.filipe.backendstockapp.v1.exception.ProductNameAlreadyExistsException;
import br.com.filipe.backendstockapp.v1.exception.ProductNotFoundException;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.repository.ProductRepository;
import org.hibernate.sql.Delete;
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
    public ProductDTO findByCustomId(String customId) {
        Product product = verifyIfProductExists(customId);
        return new ProductDTO(product);
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> findAllProducts() {
        List<Product> result = productRepository.findAll();
        verifyIfListIsEmpty(result);
        return result.stream().map(ProductDTO::new).toList();
    }

    public void createProduct(Product product) {
        verifyIfRegisteringProductExists(product);
        productRepository.save(product);
    }

    public void deleteProduct(String customId) {
        Product product = verifyIfProductExists(customId);
        productRepository.delete(product);
    }

    public Product verifyIfProductExists(String customId) {
        Optional<Product> result = productRepository.findByCustomId(customId);
        if (result.isEmpty()) {
            throw new ProductNotFoundException();
        }
        return result.get();
    }

    public void verifyIfRegisteringProductExists(Product product) {
        Optional<Product> result = productRepository.findByCustomId(product.getCustomId());
        registeringProductExists(result, "id");
        result = productRepository.findByName(product.getName());
        registeringProductExists(result, "name");
    }

    public void registeringProductExists(Optional<Product> result, String findBy) {
        if (result.isPresent() && findBy.equals("id")) {
            throw new ProductIDAlreadyExistsException();
        }
        if (result.isPresent() && findBy.equals("name")) {
            throw new ProductNameAlreadyExistsException();
        }
    }

    public void verifyIfListIsEmpty(List<Product> result) {
        if (result.isEmpty()) {
            throw new NoRegisteredProductsException();
        }
    }
}
