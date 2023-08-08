package com.dallasdevs.team6.controller;

import com.dallasdevs.team6.json.CreateEventPost;
import com.dallasdevs.team6.entity.EventEntity;
import com.dallasdevs.team6.dao.EventDao;
import com.dallasdevs.team6.mapper.EventMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventDao eventDao;
    private final EventMapper eventMapper;

    @Autowired
    public EventController(EventDao eventDao, EventMapper eventMapper) {
        this.eventDao = eventDao;
        this.eventMapper = eventMapper;
    }

    @PostMapping("/create-event")
    public ResponseEntity<?> createEvent(@RequestBody CreateEventPost eventPost) {
        try {
            EventEntity eventEntity = eventMapper.postToEntity(eventPost);
            eventEntity.setUuid(UUID.randomUUID().toString());
            eventDao.createEvent(eventEntity);
            return new ResponseEntity<>("Event created successfully!", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error creating event", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<?> getEvent(@PathVariable String uuid) {
        try {
            EventEntity eventEntity = eventDao.getEventById(uuid);
            if (eventEntity != null) {
                return new ResponseEntity<>(eventEntity, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Event not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error retrieving event", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/events-attending/{uuid}")
    public ResponseEntity<?> getEventsAttendedByUser(@PathVariable String uuid) {
        try {
            List<EventEntity> events = eventDao.getEventsAttendedByUser(uuid);
            return new ResponseEntity<>(events, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error retrieving events", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/upcoming")
    public ResponseEntity<?> getUpcomingEvents() {
        try {
            List<EventEntity> events = eventDao.getUpcomingEvents();
            return new ResponseEntity<>(events, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error retrieving upcoming events", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


