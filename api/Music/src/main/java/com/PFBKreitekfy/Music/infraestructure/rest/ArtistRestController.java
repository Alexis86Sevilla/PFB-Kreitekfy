package com.PFBKreitekfy.Music.infraestructure.rest;


import com.PFBKreitekfy.Music.application.dto.ArtistDTO;
import com.PFBKreitekfy.Music.application.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ArtistRestController {
    private final ArtistService artistService;

    @Autowired
    public ArtistRestController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @CrossOrigin
    @PostMapping(value = "/artists", produces = "application/json", consumes = "application/json")
    ResponseEntity<ArtistDTO> insertArtist(@RequestBody ArtistDTO artistDTO) {
        ArtistDTO artistSaved = this.artistService.saveArtist(artistDTO);
        return new ResponseEntity<>(artistSaved, HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping(value = "/artists", produces = "application/json")
    ResponseEntity<List<ArtistDTO>> getAllIArtists() {
        List<ArtistDTO> artist = this.artistService.getAllArtists();
        return new ResponseEntity<>(artist, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/artists/{artistId}")
    ResponseEntity<ArtistDTO> getArtistById(@PathVariable Long albumId) {
        Optional<ArtistDTO> artist = this.artistService.getArtistById(albumId);

        if (artist.isPresent()) {
            return new ResponseEntity<>(artist.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
