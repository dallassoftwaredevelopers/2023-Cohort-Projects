package com.dallasdevs.team6.dao;

import com.dallasdevs.team6.entity.EventEntity;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

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

    @Transactional
    public List<EventEntity> getEventsAttendedByUser(String userId) {
        Session session = entityManager.unwrap(Session.class);
        return session.createQuery("SELECT ue.event FROM UserEventEntity ue WHERE ue.user.uuid = :userId", EventEntity.class)
                .setParameter("userId", userId)
                .getResultList();
    }

    @Transactional
    public List<EventEntity> getUpcomingEvents() {
        Session session = entityManager.unwrap(Session.class);
        return session.createQuery("FROM EventEntity e WHERE e.date >= :currentDate", EventEntity.class)
                .setParameter("currentDate", new Date())
                .getResultList();
    }

}



