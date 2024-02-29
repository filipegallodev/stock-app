package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.CustomerDTO;
import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.dto.SaleCompleteInfoDTO;
import br.com.filipe.backendstockapp.v1.dto.SaleDTO;
import br.com.filipe.backendstockapp.v1.model.Customer;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.model.SaleProduct;
import br.com.filipe.backendstockapp.v1.repository.CustomerRepository;
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
    private final CustomerRepository customerRepository;

    private final SaleProductService saleProductService;

    public SaleService(SaleRepository saleRepository, ProductRepository productRepository, CustomerRepository customerRepository, SaleProductService saleProductService) {
        this.saleRepository = saleRepository;
        this.productRepository = productRepository;
        this.customerRepository = customerRepository;
        this.saleProductService = saleProductService;
    }

    public void createSale(List<SaleProduct> saleProducts, UUID customerId) {
        Sale sale = new Sale(customerId, calculateTotalPrice(saleProducts), LocalDateTime.now(ZoneId.of("UTC-3")));
        Sale result = saleRepository.save(sale);
        if (result.getId() != null) {
            saleProductService.createSaleProduct(result, saleProducts);
        }
    }

    @Transactional(readOnly = true)
    public SaleCompleteInfoDTO findById(Long id) {
        Optional<Sale> result = saleRepository.findById(id);

        SaleDTO sale = saleExists(result);
        CustomerDTO customer = getCustomer(sale.getCustomerId());
        List<ProductDTO> productList = getAllSaleProducts(sale.getId());

        return new SaleCompleteInfoDTO(sale, customer, productList);
    }

    public List<SaleDTO> findAllSales() {
        List<Sale> result = saleRepository.findAll();
        return result.stream().map(SaleDTO::new).toList();
    }

    public SaleDTO saleExists(Optional<Sale> result) {
        if (result.isPresent()) {
            return new SaleDTO(result.get());
        }
        return null; //TODO SaleNotFoundException
    }

    public Double calculateTotalPrice(List<SaleProduct> saleProducts) {
        double totalPrice = 0;
        for (SaleProduct saleProduct : saleProducts) {
            ProductDTO product = getProduct(saleProduct.getProductCustomId());
            if (product != null) {
                totalPrice = totalPrice + (saleProduct.getAmount() * product.getPrice());
            }
        }
        return totalPrice;
    }

    public ProductDTO getProduct(String id) {
        Optional<Product> product = productRepository.findByCustomId(id);
        if (product.isPresent()){
            return new ProductDTO(product.get());
        }
        return null;
    }

    public CustomerDTO getCustomer(UUID id) {
        Optional<Customer> result = customerRepository.findById(id);
        if (result.isPresent()){
            return new CustomerDTO(result.get());
        }
        return null; //TODO CustomerNotFoundException
    }

    public List<ProductDTO> getAllSaleProducts(Long saleId) {
        List<ProductDTO> productList = saleProductService.findAllSaleProductsCompleteInfo(saleId);
        return productList;
    }

}
