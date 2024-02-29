package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.exception.NoRegisteredProductsException;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.model.SaleProduct;
import br.com.filipe.backendstockapp.v1.repository.ProductRepository;
import br.com.filipe.backendstockapp.v1.repository.SaleProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleProductService {

    private final SaleProductRepository saleProductRepository;
    private final ProductRepository productRepository;

    public SaleProductService(SaleProductRepository saleProductRepository, ProductRepository productRepository) {
        this.saleProductRepository = saleProductRepository;
        this.productRepository = productRepository;
    }

    public void createSaleProduct(Sale sale, List<SaleProduct> saleProducts) {
        for (SaleProduct saleProduct : saleProducts) {
            saleProduct.setSaleId(sale.getId());
            saleProductRepository.save(saleProduct);
        }
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> findAllSaleProductsCompleteInfo(Long saleId) {
        List<Product> result = productRepository.findAllSaleProducts(saleId);
        verifyIfListIsEmpty(result);
        return result.stream().map(ProductDTO::new).toList();
    }

    public void verifyIfListIsEmpty(List<Product> result) {
        if (result.isEmpty()) {
            throw new NoRegisteredProductsException();
        }
    }
}
