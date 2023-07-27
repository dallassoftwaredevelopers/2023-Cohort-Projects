package com.dallasdevs.team6.dao;

import com.dallasdevs.team6.entity.UserEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
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

    @Transactional
    public UserEntity findByUsername(String username) {
        try {
            return entityManager.createQuery("SELECT u FROM UserEntity u WHERE u.username = :username", UserEntity.class)
                    .setParameter("username", username)
                    .getSingleResult();
        } catch (NoResultException e) {
            // If no user is found with the given username, return null or handle the exception as appropriate.
            return null;
        }
    }

}
