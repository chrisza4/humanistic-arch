package com.example.spring.services;

import org.springframework.stereotype.Component;

@Component
public class DownloadService {
    private final FileService fileService;

    public DownloadService(FileService fileService) {
        this.fileService = fileService;
    }

    public void DownloadProcess() {
        this.fileService.Download("somerandompath");
    }
}
