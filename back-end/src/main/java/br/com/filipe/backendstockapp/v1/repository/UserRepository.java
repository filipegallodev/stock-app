package br.com.filipe.backendstockapp.v1.repository;

import br.com.filipe.backendstockapp.v1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(nativeQuery = true, value = """
                                        SELECT ID, USERNAME, NAME, PASSWORD_HASH
                                        FROM USERS
                                        WHERE USERNAME = :username
                                        """)
    Optional<User> findByUsername(String username);
}
