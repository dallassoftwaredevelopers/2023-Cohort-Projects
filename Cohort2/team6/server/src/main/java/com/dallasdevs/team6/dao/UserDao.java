package com.dallasdevs.team6.dao;

import com.dallasdevs.team6.entity.UserEntity;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
    private final EntityManager entityManager;

    public UserDao(final EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional
    public void createUser(final UserEntity newUser) {
        Session session = entityManager.unwrap(Session.class);
        session.persist(newUser);
    }
}
