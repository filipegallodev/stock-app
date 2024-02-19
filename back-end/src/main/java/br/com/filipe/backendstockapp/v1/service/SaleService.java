package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.repository.SaleRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public void createSale(Sale sale) {
        sale.setCreatedAt(LocalDateTime.now());
        saleRepository.save(sale);
    }
}
