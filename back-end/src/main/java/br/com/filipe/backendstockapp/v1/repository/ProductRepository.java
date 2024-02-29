package br.com.filipe.backendstockapp.v1.repository;

import br.com.filipe.backendstockapp.v1.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(nativeQuery = true, value = """
                                        SELECT ID, CUSTOM_ID, NAME, AMOUNT, PRICE
                                        FROM PRODUCT
                                        WHERE CUSTOM_ID = :customId
                                        """)
    Optional<Product> findByCustomId(String customId);

    @Query(nativeQuery = true, value = """
                                        SELECT ID, CUSTOM_ID, NAME, AMOUNT, PRICE
                                        FROM PRODUCT
                                        WHERE NAME = :name
                                        """)
    Optional<Product> findByName(String name);

    @Query(nativeQuery = true, value = """
                                        SELECT A.ID, A.CUSTOM_ID, A.NAME, B.AMOUNT, A.PRICE
                                        FROM PRODUCT A
                                        LEFT OUTER JOIN SALE_PRODUCT B ON (B.PRODUCT_CUSTOMID = A.CUSTOM_ID)
                                        WHERE B.SALE_ID = :sale_id
                                        """)
    List<Product> findAllSaleProducts(Long sale_id);
}
