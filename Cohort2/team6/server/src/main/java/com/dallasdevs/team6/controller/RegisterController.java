package com.dallasdevs.team6.controller;


import com.dallasdevs.team6.json.RegisterUserPost;
import com.dallasdevs.team6.service.RegisterUserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
public class RegisterController {

    private final RegisterUserService registerUserService;

    public RegisterController(final RegisterUserService registerUserService) {
        this.registerUserService = registerUserService;
    }

    @PostMapping
    public void registerNewUser(final @RequestBody @Valid RegisterUserPost registerUserPost) {
        registerUserService.createUser(registerUserPost);
    }
}
