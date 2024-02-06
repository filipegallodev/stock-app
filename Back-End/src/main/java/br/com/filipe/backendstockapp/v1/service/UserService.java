package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.model.User;
import br.com.filipe.backendstockapp.v1.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void register(User user) {
        userRepository.save(user);
    }
}