package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.SaleDTO;
import br.com.filipe.backendstockapp.v1.model.Customer;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.model.SaleProduct;
import br.com.filipe.backendstockapp.v1.repository.ProductRepository;
import br.com.filipe.backendstockapp.v1.repository.SaleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SaleService {

    private final SaleRepository saleRepository;
    private final ProductRepository productRepository;

    private final SaleProductService productSaleService;

    public SaleService(SaleRepository saleRepository, ProductRepository productRepository, SaleProductService productSaleService) {
        this.saleRepository = saleRepository;
        this.productRepository = productRepository;
        this.productSaleService = productSaleService;
    }

    public void createSale(List<SaleProduct> saleProducts, UUID customerId) {
        Sale sale = new Sale(customerId, calculateTotalPrice(saleProducts), LocalDateTime.now(ZoneId.of("UTC-3")));
        Sale result = saleRepository.save(sale);
        if (result.getId() != null) {
            productSaleService.createSaleProduct(result, saleProducts);
        }
    }

    @Transactional(readOnly = true)
    public SaleDTO findById(Long id) {
        Optional<Sale> result = saleRepository.findById(id);
        return result.map(SaleDTO::new).orElse(null);
    }

    public List<SaleDTO> findAllSales() {
        List<Sale> result = saleRepository.findAll();
        return result.stream().map(SaleDTO::new).toList();
    }

    public Double calculateTotalPrice(List<SaleProduct> saleProducts) {
        double totalPrice = 0;
        for (SaleProduct saleProduct : saleProducts) {
            Optional<Product> product = productRepository.findByCustomId(saleProduct.getProductCustomId());
            if (product.isPresent()) {
                totalPrice = totalPrice + (saleProduct.getAmount() * product.get().getPrice());
            }
        }
        return totalPrice;
    }
}
