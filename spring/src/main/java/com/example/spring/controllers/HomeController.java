package com.example.spring.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.SuperService;

@RestController
public class HomeController {

    @GetMapping("/")
    public String index() {
        var superService = new SuperService();
        return "Super Secret Number is " + superService.getSuperSecretNumber();
    }

    public void DownloadContent() {
    }
}
