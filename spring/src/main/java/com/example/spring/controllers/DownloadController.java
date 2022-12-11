package com.example.spring.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.services.DownloadService;

@RestController
public class DownloadController {

    private final DownloadService downloadService;

    public DownloadController(DownloadService downloadService) {
        this.downloadService = downloadService;
    }

    @GetMapping("/Download")
    public String index() {
        this.downloadService.DownloadProcess();
        return "Download Completed";
    }

    public void DownloadContent() {
    }
}
