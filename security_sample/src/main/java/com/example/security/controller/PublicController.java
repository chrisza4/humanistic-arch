package com.example.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/public")
public class PublicController {

    @GetMapping("/info")
    public ResponseEntity<Map<String, Object>> getPublicInfo() {
        Map<String, Object> response = Map.of(
            "message", "This is public information accessible to everyone",
            "timestamp", LocalDateTime.now(),
            "access_level", "public",
            "authentication_required", false
        );
        return ResponseEntity.ok(response);
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, String>> getStatus() {
        Map<String, String> status = Map.of(
            "status", "UP",
            "service", "Security Sample Application",
            "version", "1.0.0"
        );
        return ResponseEntity.ok(status);
    }
}

@RestController
class HealthController {
    
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of("status", "healthy"));
    }

    @GetMapping("/")
    public ResponseEntity<Map<String, String>> home() {
        return ResponseEntity.ok(Map.of(
            "message", "Welcome to Spring Boot Security Sample",
            "public_endpoints", "/public/info, /public/status, /health",
            "private_endpoints", "/private/user-data (USER role), /private/admin-data (ADMIN role)"
        ));
    }
}