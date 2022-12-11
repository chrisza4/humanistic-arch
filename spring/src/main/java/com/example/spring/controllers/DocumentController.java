package com.example.spring.controllers;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.boot.jackson.JsonObjectDeserializer;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.web.bind.annotation.*;

import com.example.spring.models.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class DocumentController {

    private final Document document;

    public DocumentController(Document document) {
        this.document = document;
    }

    @PostMapping("/Document")
    public String index1(@RequestBody String body) throws JsonMappingException, JsonProcessingException {
        var docModel = new Document();
        var request = new ObjectMapper().readValue(body, DocumentPostRequest.class);
        docModel.create(request.title, request.content);
        return "Success!";
        // How to test????
    }

    @PostMapping("/Document")
    public String index2(@RequestBody String body) throws JsonMappingException, JsonProcessingException {
        // This can test by....
        var request = new ObjectMapper().readValue(body, DocumentPostRequest.class);
        document.create(request.title, request.content);
        return "Success!";
    }
}
