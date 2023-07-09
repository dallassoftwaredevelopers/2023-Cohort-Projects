package com.dallasdevs.team6.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class ExampleController {

    Logger logger = LoggerFactory.getLogger(ExampleController.class);

    @GetMapping
    public String test() {
        logger.info("Logging example");
        return "It works!";
    }
}
