package br.com.filipe.backendstockapp.v1.repository;

import br.com.filipe.backendstockapp.v1.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query(nativeQuery = true, value = """
                                        SELECT ID,
                                               USERNAME,
                                               PASSWORD_HASH,
                                               FIRST_NAME,
                                               LAST_NAME,
                                               PHONE_NUMBER,
                                               PURCHASE_QUANTITY,
                                               CREATED_AT,
                                               LAST_LOGIN,
                                               LAST_PURCHASE
                                        FROM CUSTOMER
                                        WHERE USERNAME = :username
                                        """)
    Customer findByUsername(String username);
}
