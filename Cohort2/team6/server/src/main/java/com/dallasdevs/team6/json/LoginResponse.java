package com.dallasdevs.team6.json;

public class LoginResponse {
    private String token;
    private String uuid;
    private String username;

    public LoginResponse(String token, String uuid, String username) {
        this.token = token;
        this.uuid = uuid;
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

