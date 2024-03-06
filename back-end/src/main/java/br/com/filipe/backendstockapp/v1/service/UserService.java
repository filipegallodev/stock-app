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

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(User user) {
        verifyIfUsernameAlreadyExists(user);
        user = encodeUserPassword(user);
        userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public void login(User user) {
        User result = userRepository.findByUsername(user.getUsername()).orElseThrow(UserNotFoundException::new);
        verifyIfPasswordMatches(user, result);
    }

    public void verifyIfUsernameAlreadyExists(User user) {
        Optional<User> result = userRepository.findByUsername(user.getUsername());
        if (result.isPresent()) {
            throw new UserAlreadyExistsException();
        }
    }

    public User encodeUserPassword(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return user;
    }

    public void verifyIfPasswordMatches(User user, User result) {
        if (!passwordEncoder.matches(user.getPassword(), result.getPassword())) {
            throw new PasswordNotMatchesException();
        }
    }
}
