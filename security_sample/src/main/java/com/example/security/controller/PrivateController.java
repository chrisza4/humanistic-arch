package com.example.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/private")
public class PrivateController {

    @GetMapping("/user-data")
    public ResponseEntity<Map<String, Object>> getUserData() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        boolean hasUserRole = authentication.getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals("ROLE_USER"));
        
        if (!hasUserRole) {
            return ResponseEntity.status(403).body(Map.of("error", "Access denied: USER role required"));
        }
        
        String username = authentication.getName();

        Map<String, Object> response = Map.of(
                "message", "This is private user data",
                "username", username,
                "authorities", authentication.getAuthorities(),
                "timestamp", LocalDateTime.now(),
                "access_level", "USER");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/admin-data")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> getAdminData() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        Map<String, Object> response = Map.of(
                "message", "This is sensitive admin data",
                "username", username,
                "authorities", authentication.getAuthorities(),
                "timestamp", LocalDateTime.now(),
                "access_level", "ADMIN");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/profile")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<String, Object>> getProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Map<String, Object> profile = Map.of(
                "username", authentication.getName(),
                "roles", authentication.getAuthorities(),
                "authenticated", authentication.isAuthenticated(),
                "session_info", Map.of(
                        "login_time", LocalDateTime.now().minusHours(2),
                        "last_activity", LocalDateTime.now()));

        return ResponseEntity.ok(profile);
    }
}