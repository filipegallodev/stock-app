package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.SaleCompleteInfoDTO;
import br.com.filipe.backendstockapp.v1.dto.SaleDTO;
import br.com.filipe.backendstockapp.v1.model.SaleProduct;
import br.com.filipe.backendstockapp.v1.service.SaleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/sale")
public class SaleController {

    private final SaleService saleService;

    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @PostMapping
    public ResponseEntity<HttpStatus> create(@RequestBody List<SaleProduct> saleProducts, @RequestHeader("customer_id") UUID customerId) {
        saleService.createSale(saleProducts, customerId);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<SaleDTO>> findAllSales() {
        List<SaleDTO> result = saleService.findAllSales();
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<SaleCompleteInfoDTO> findProductById(@PathVariable Long id) {
        SaleCompleteInfoDTO result = saleService.findById(id);
        return ResponseEntity.ok(result);
    }
}
