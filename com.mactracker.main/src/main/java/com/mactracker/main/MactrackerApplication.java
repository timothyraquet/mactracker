package com.mactracker.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
        scanBasePackages = {
                "com.mactracker.controller",
                "com.mactracker.main"})
public class MactrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(MactrackerApplication.class, args);
    }

}
