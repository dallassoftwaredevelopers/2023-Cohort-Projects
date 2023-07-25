package com.dallasdevs.team6.service;

import com.dallasdevs.team6.dao.UserDao;
import com.dallasdevs.team6.json.RegisterUserPost;
import com.dallasdevs.team6.mapper.UserMapper;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class RegisterUserService {
    private final PasswordEncryptionService passwordEncryptionService;
    private final UserDao userDao;
    private final UserMapper userMapper;

    public RegisterUserService(final PasswordEncryptionService passwordEncryptionService, final UserDao userDao, final UserMapper userMapper) {
        this.passwordEncryptionService = passwordEncryptionService;
        this.userDao = userDao;
        this.userMapper = userMapper;
    }

    public void createUser(final RegisterUserPost registerUserPost) {
        var entity = userMapper.postToEntity(registerUserPost);
        entity.setUuid(UUID.randomUUID().toString());
        entity.setPassword(passwordEncryptionService.encryptPassword(registerUserPost.getPassword()));
        userDao.createUser(entity);
    }
}
