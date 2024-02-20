package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.CustomerDTO;
import br.com.filipe.backendstockapp.v1.model.Customer;
import br.com.filipe.backendstockapp.v1.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<CustomerDTO>> findAllCustomers() {
        List<CustomerDTO> result = customerService.findAllCustomers();
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<HttpStatus> register(@RequestBody Customer customer) {
        customerService.registerCustomer(customer);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping(value = "/login")
    public ResponseEntity<CustomerDTO> login(@RequestBody Customer customer) {
        CustomerDTO result = customerService.customerLogin(customer);
        return ResponseEntity.ok(result);
    }
}
