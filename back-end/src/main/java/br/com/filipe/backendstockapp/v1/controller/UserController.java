package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.dto.UserDTO;
import br.com.filipe.backendstockapp.v1.model.User;
import br.com.filipe.backendstockapp.v1.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/register")
    public ResponseEntity<UserDTO> register(@RequestBody User user) {
        UserDTO userCreated = userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<UserDTO> login(@RequestBody User user) {
        UserDTO userDTO = userService.loginUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(userDTO);
    }
}
