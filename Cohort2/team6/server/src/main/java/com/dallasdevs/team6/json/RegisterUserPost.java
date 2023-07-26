package com.dallasdevs.team6.json;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

public class RegisterUserPost {

    @Email
    @NotBlank
    @Length(min=5, max=200)
    private String email;

    @NotBlank
    @Length(min=5, max=200)
    private String password;

    @NotBlank
    @Length(max=200)
    private String firstName;

    @NotBlank
    @Length(max=200)
    private String lastName;

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(final String lastName) {
        this.lastName = lastName;
    }
}
