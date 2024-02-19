package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.model.Sale;
import br.com.filipe.backendstockapp.v1.service.SaleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sale")
public class SaleController {

    private final SaleService saleService;

    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @PostMapping
    public ResponseEntity<HttpStatus> register(@RequestBody Sale sale) {
        saleService.createSale(sale);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
