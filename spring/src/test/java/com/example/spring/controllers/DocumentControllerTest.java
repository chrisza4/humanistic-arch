package com.example.spring.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.example.spring.models.Document;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public class DocumentControllerTest {
    @Test
    public void DocumentControllerCallServiceCorrectly() throws JsonMappingException, JsonProcessingException {
        var mockDocument = mock(Document.class);

        var controller = new DocumentController(mockDocument);
        controller.index2("{\"title\": \"title\", \"content\": \"content1\"}");

        Mockito.verify(mockDocument).create("title", "content1");
    }
}
