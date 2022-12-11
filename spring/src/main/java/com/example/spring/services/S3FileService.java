package com.example.spring.services;

import org.springframework.stereotype.Component;

public class S3FileService implements FileService {
    @Override
    public void Download(String path) {
        System.out.println("Download to S3 Buckets");
    }
}
