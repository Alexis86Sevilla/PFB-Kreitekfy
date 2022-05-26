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
<<<<<<< HEAD


=======
>>>>>>> 3ae876b7bc60de8299ef360e51609fccc5391e30
    private final ArtistService artistService;

    @Autowired
    public ArtistRestController(ArtistService artistService) {
        this.artistService = artistService;
    }

<<<<<<< HEAD

=======
>>>>>>> 3ae876b7bc60de8299ef360e51609fccc5391e30
    @CrossOrigin
    @PostMapping(value = "/artists", produces = "application/json", consumes = "application/json")
    ResponseEntity<ArtistDTO> insertArtist(@RequestBody ArtistDTO artistDTO) {
        ArtistDTO artistSaved = this.artistService.saveArtist(artistDTO);
        return new ResponseEntity<>(artistSaved, HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping(value = "/artists", produces = "application/json")
<<<<<<< HEAD
    ResponseEntity<List<ArtistDTO>> getAllArtists() {
        List<ArtistDTO> artists = this.artistService.getAllArtists();
        return new ResponseEntity<>(artists, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/artists/{artistId}")
    ResponseEntity<ArtistDTO> getArtistById(@PathVariable Long artistId) {
        Optional<ArtistDTO> artist = this.artistService.getArtistById(artistId);
=======
    ResponseEntity<List<ArtistDTO>> getAllIArtists() {
        List<ArtistDTO> artist = this.artistService.getAllArtists();
        return new ResponseEntity<>(artist, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/artists/{artistId}")
    ResponseEntity<ArtistDTO> getArtistById(@PathVariable Long albumId) {
        Optional<ArtistDTO> artist = this.artistService.getArtistById(albumId);
>>>>>>> 3ae876b7bc60de8299ef360e51609fccc5391e30

        if (artist.isPresent()) {
            return new ResponseEntity<>(artist.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
