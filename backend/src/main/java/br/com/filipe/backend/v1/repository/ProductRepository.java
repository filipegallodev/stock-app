package br.com.filipe.backendstockapp.v1.repository;

import br.com.filipe.backendstockapp.v1.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
