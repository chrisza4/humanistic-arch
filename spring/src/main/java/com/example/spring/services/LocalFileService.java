package com.example.spring.services;

public class LocalFileService implements FileService {

    @Override
    public void Download(String path) {
        System.out.println("Download to local disk");
    }

}
