package com.example.spring.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.SuperService;

@RestController
public class Home2Controller {

    private final SuperService superService;

    public Home2Controller(SuperService superService) {
        this.superService = superService;
    }

    @GetMapping("/home2")
    public String index() {
        return "Super Secret Number is " + superService.getSuperSecretNumber();
    }

}
