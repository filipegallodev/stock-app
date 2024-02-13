package br.com.filipe.backendstockapp.v1.service;

import br.com.filipe.backendstockapp.v1.dto.UserDTO;
import br.com.filipe.backendstockapp.v1.exception.PasswordNotMatchesException;
import br.com.filipe.backendstockapp.v1.exception.UserAlreadyExistsException;
import br.com.filipe.backendstockapp.v1.exception.UserNotFoundException;
import br.com.filipe.backendstockapp.v1.model.User;
import br.com.filipe.backendstockapp.v1.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void registerUser(User user) {
        User result = userRepository.findByUsername(user.getUsername());
        userExists(result, "register");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public UserDTO loginUser(User user) {
        User result = userRepository.findByUsername(user.getUsername());
        userExists(result, "login");
        passwordMatches(user, result);
        return new UserDTO(result);
    }

    public void userExists(User result, String transactionType) {
        if (result == null && transactionType.equals("login")) {
            throw new UserNotFoundException();
        }
        if (result != null && transactionType.equals("register")) {
            throw new UserAlreadyExistsException();
        }
    }

    public void passwordMatches(User user, User result) {
        if (!passwordEncoder.matches(user.getPassword(), result.getPassword())) {
            throw new PasswordNotMatchesException();
        }
    }
}
