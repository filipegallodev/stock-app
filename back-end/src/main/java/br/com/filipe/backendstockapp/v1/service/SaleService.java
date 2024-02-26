package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.SaleDTO;
import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.repository.SaleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public void createSale(Sale sale) {
        sale.setCreatedAt(LocalDateTime.now(ZoneId.of("UTC-3")));
        saleRepository.save(sale);
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
}
