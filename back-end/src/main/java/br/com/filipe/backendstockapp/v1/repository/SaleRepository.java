package br.com.filipe.backendstockapp.v1.repository;

import br.com.filipe.backendstockapp.v1.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
}
