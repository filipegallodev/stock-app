package com.example.demo.greeting;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Configuration
@RestController
public class GreetingController {
    private static final String template = "Hello, %s, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name,
                             @RequestParam(value="age", defaultValue = "Young") String age) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name, age));
    }
}