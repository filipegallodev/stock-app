package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.CustomerDTO;
import br.com.filipe.backendstockapp.v1.model.Customer;
import br.com.filipe.backendstockapp.v1.repository.CustomerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Transactional(readOnly = true)
    public List<CustomerDTO> findAllCustomers() {
        List<Customer> result = customerRepository.findAll();
        return result.stream().map(CustomerDTO::new).toList();
    }
}
