package com.dallasdevs.team6.entity;

import jakarta.persistence.*;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Table(name = "events")
@Entity
public class EventEntity {
    @Id
    @Column(name="event_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String uuid;

    @Column(name="title")
    private String title;

    @Column(name="date")
    private Date date;

    @Column(name="time")
    private Time time;

    @Column(name="description")
    private String description;

    @Column(name="price")
    private Double price;

    @Column(name="location")
    private String location;

    @Column(name="image_url")
    private String image_url;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserEventEntity> attendees = new ArrayList<>();

    public EventEntity() {
    }

    public EventEntity(String uuid, String title, Date date, Time time, String description, Double price, String location, String image_url) {
        this.uuid = uuid;
        this.title = title;
        this.date = date;
        this.time = time;
        this.description = description;
        this.price = price;
        this.location = location;
        this.image_url = image_url;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public List<UserEventEntity> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<UserEventEntity> attendees) {
        this.attendees = attendees;
    }
}