package com.example.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;

@Configuration
public class DownloadFactory2 {

    @Autowired
    Environment env;

    @Bean
    public FileService anotherFileService() {
        return new SpecialFileService();
    }
}
