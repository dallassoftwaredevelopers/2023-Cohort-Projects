package com.dallasdevs.team6.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordEncryptionService {

    private final PasswordEncoder bCryptPasswordEncoder;

    public PasswordEncryptionService(final PasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public String encryptPassword(final String rawPassword) {
        return bCryptPasswordEncoder.encode(rawPassword);
    }

    public boolean validatePassword(final String passwordAttempt, final String encryptedPassword) {
        return bCryptPasswordEncoder.matches(passwordAttempt, encryptedPassword);
    }
}
