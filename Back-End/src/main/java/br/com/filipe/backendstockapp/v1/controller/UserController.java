package br.com.filipe.backendstockapp.v1.controller;

import br.com.filipe.backendstockapp.v1.model.User;
import br.com.filipe.backendstockapp.v1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/register")
    public void register(@RequestBody User user) {
        userService.register(user);
    }
}
