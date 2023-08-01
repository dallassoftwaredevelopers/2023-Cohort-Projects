package com.dallasdevs.team6.service;

import com.dallasdevs.team6.dao.EventDao;
import com.dallasdevs.team6.entity.EventEntity;
import com.dallasdevs.team6.json.CreateEventPost;
import com.dallasdevs.team6.mapper.EventMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class CreateEventService {

    private final EventDao eventDao;
    private final EventMapper eventMapper;

    public CreateEventService(EventDao eventDao, EventMapper eventMapper) {
        this.eventDao = eventDao;
        this.eventMapper = eventMapper;
    }

    @Transactional
    public void createEvent(CreateEventPost createEventPost) {
        EventEntity eventEntity = eventMapper.postToEntity(createEventPost);
        eventEntity.setUuid(UUID.randomUUID().toString());
        eventDao.createEvent(eventEntity);
    }
}

