package com.PFBKreitekfy.Music.infraestructure.rest;


import com.PFBKreitekfy.Music.application.dto.StyleDTO;
import com.PFBKreitekfy.Music.application.service.StyleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StyleRestController {
    private final StyleService styleService;

    @Autowired
    public StyleRestController(StyleService styleService) {
        this.styleService = styleService;
    }

    @CrossOrigin
    @PostMapping(value = "/styles", produces = "application/json", consumes = "application/json")
    ResponseEntity<StyleDTO> insertStyle(@RequestBody StyleDTO styleDTO) {
        StyleDTO styleSaved = this.styleService.saveStyle(styleDTO);
        return new ResponseEntity<>(styleSaved, HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping(value = "/styles", produces = "application/json")
    ResponseEntity<List<StyleDTO>> getAllStyles() {
        List<StyleDTO> styles = this.styleService.getAllStyles();
        return new ResponseEntity<>(styles, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/styles/{styleId}")
    ResponseEntity<StyleDTO> getStyleById(@PathVariable Long styleId) {
        Optional<StyleDTO> styles = this.styleService.getStyleById(styleId);

        if (styles.isPresent()) {
            return new ResponseEntity<>(styles.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
