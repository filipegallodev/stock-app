package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.CustomerDTO;
import br.com.filipe.backendstockapp.v1.exception.PasswordNotMatchesException;
import br.com.filipe.backendstockapp.v1.exception.UserAlreadyExistsException;
import br.com.filipe.backendstockapp.v1.exception.UserNotFoundException;
import br.com.filipe.backendstockapp.v1.model.Customer;
import br.com.filipe.backendstockapp.v1.repository.CustomerRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public CustomerService(CustomerRepository customerRepository, BCryptPasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(readOnly = true)
    public List<CustomerDTO> findAllCustomers() {
        List<Customer> result = customerRepository.findAll();
        return result.stream().map(customer -> {
            customer.setPassword(null);
            return new CustomerDTO(customer);
        }).toList();
    }

    public void registerCustomer(Customer customer) {
        Customer result = customerRepository.findByUsername(customer.getUsername());
        customerExists(result, "register");
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        customer.setCreatedAt(LocalDateTime.now(ZoneId.of("UTC-3")));
        customerRepository.save(customer);
    }

    @Transactional(readOnly = true)
    public CustomerDTO customerLogin(Customer customer) {
        Customer result = customerRepository.findByUsername(customer.getUsername());
        customerExists(result, "login");
        passwordMatches(customer, result);
        return new CustomerDTO(result);
    }

    public void customerExists(Customer result, String transactionType) {
        if (result == null && transactionType.equals("login")) {
            throw new UserNotFoundException();
        }
        if (result != null && transactionType.equals("register")) {
            throw new UserAlreadyExistsException();
        }
    }

    public void passwordMatches(Customer customer, Customer result) {
        if (!passwordEncoder.matches(customer.getPassword(), result.getPassword())) {
            throw new PasswordNotMatchesException();
        }
    }
}
