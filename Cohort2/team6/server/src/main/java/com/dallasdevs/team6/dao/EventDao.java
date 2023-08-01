package com.dallasdevs.team6.dao;

import com.dallasdevs.team6.entity.EventEntity;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

@Repository
public class EventDao {
    private final EntityManager entityManager;

    public EventDao(final EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional
    public void createEvent(final EventEntity newEvent) {
        Session session = entityManager.unwrap(Session.class);
        session.persist(newEvent);
    }

    public EventEntity getEventById(String eventId) {
        return entityManager.find(EventEntity.class, eventId);
    }

}



