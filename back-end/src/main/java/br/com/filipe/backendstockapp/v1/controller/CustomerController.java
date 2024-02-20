package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.CustomerDTO;
import br.com.filipe.backendstockapp.v1.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<CustomerDTO>> findAllProducts() {
        List<CustomerDTO> result = customerService.findAllCustomers();
        return ResponseEntity.ok(result);
    }
}
