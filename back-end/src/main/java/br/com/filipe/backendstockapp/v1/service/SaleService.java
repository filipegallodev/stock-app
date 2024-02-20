package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.ProductDTO;
import br.com.filipe.backendstockapp.v1.dto.SaleDTO;
import br.com.filipe.backendstockapp.v1.model.Product;
import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.repository.SaleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.TemporalAccessor;
import java.util.Optional;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public void createSale(Sale sale) {
        sale.setCreatedAt(LocalDateTime.now(ZoneId.of("GMT+3")));
        saleRepository.save(sale);
    }

    @Transactional(readOnly = true)
    public SaleDTO findById(Long id) {
        Optional<Sale> result = saleRepository.findById(id);
        return result.map(SaleDTO::new).orElse(null);
    }
}
