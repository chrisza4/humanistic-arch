package com.example.spring.services;

public class SpecialFileService implements FileService {

    @Override
    public void Download(String path) {
        System.out.println("Special File Service");

    }

}
