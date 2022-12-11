package com.example.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class DownloadFactory {

    @Autowired
    Environment env;

    @Bean
    public FileService fileService() {
        var environment = env.getProperty("spring.profiles.active");
        System.out.println("Use DownloadFactory1");
        if (environment != null && environment.equals("dev")) {
            return new LocalFileService();
        }
        return new S3FileService();
    }
}
