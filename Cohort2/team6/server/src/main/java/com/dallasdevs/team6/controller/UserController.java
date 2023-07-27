package com.dallasdevs.team6.controller;

import com.dallasdevs.team6.entity.UserEntity;
import com.dallasdevs.team6.service.CustomUserDetailsService;
import com.dallasdevs.team6.service.UserLoginService;
import io.micrometer.common.util.StringUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserLoginService userLoginService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserEntity request, HttpServletResponse response) {
        if (StringUtils.isBlank(request.getUsername()) || StringUtils.isBlank(request.getPassword())) {
            return ResponseEntity.badRequest().body("Username and password cannot be blank.");
        }

        // Authenticate the user
        UserEntity userEntity = userLoginService.authenticateUser(request.getUsername(), request.getPassword());
        if (userEntity == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
        }

        // Generate JWT
        String token = userLoginService.generateJwtToken(userEntity.getUsername());

        // Attach JWT to Cookie
        Cookie cookie = new Cookie("jwtToken", token);
        cookie.setPath("/"); // Cookie path
        response.addCookie(cookie);

        return ResponseEntity.ok("User authenticated successfully.");
    }
}
