package com.dallasdevs.team6.json;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

import java.sql.Time;
import java.util.Date;

public class CreateEventPost {

    @NotBlank
    @Length(max=200)
    private String title;

    @NotBlank
    @Length(max=200)
    private Date date;

    @NotBlank
    @Length(max=200)
    private Time time;

    @NotBlank
    @Length(max=1000)
    private String description;

    @NotBlank
    @Length(max=200)
    private Double price;

    @NotBlank
    @Length(max=200)
    private String location;

    @NotBlank
    @Length(max=200)
    private String image_url;

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
}
