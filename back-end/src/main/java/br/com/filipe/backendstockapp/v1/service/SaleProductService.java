package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.model.SaleProduct;
import br.com.filipe.backendstockapp.v1.repository.SaleProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleProductService {

    private final SaleProductRepository saleProductRepository;

    public SaleProductService(SaleProductRepository saleProductRepository) {
        this.saleProductRepository = saleProductRepository;
    }

    public void createSaleProduct(Sale sale, List<SaleProduct> saleProducts) {
        for (SaleProduct saleProduct : saleProducts) {
            saleProduct.setSaleId(sale.getId());
            saleProductRepository.save(saleProduct);
        }
    }
}
