package com.filipegallo.stock.services;

import com.filipegallo.stock.dto.ProductDTO;
import com.filipegallo.stock.entities.Product;
import com.filipegallo.stock.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public ProductDTO findById(Long id) {
        Product result = productRepository.findById(id).get();
        return new ProductDTO(result);
    }
}
