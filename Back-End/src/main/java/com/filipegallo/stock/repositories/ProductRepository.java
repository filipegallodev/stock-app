package com.filipegallo.stock.repositories;

import com.filipegallo.stock.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(nativeQuery = true, value = """
                                       SELECT tb_product.id, tb_product.name, tb_product.amount, tb_game.description,
                                       tb_game.active, tb_belonging.lastChange
                                       FROM tb_product
                                       INNER JOIN tb_belonging ON tb_game.id = tb_belonging.game_id
                                       WHERE tb_belonging.list_id = :listId
                                       ORDER BY tb_belonging.position
                                       """)
    List<Product> searchByList(Long listId);
}
