package com.PFBKreitekfy.Music.infraestructure.rest;


import com.PFBKreitekfy.Music.application.dto.AlbumDTO;
import com.PFBKreitekfy.Music.application.dto.ArtistDTO;
import com.PFBKreitekfy.Music.application.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
    @PostMapping(value = "/artists", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<ArtistDTO> insertArtist(@RequestBody ArtistDTO artistDTO) {
        ArtistDTO artistSaved = this.artistService.saveArtist(artistDTO);
        return new ResponseEntity<>(artistSaved, HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping(value = "/artists", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<ArtistDTO>> getAllArtists() {
        List<ArtistDTO> artists = this.artistService.getAllArtists();
        return new ResponseEntity<>(artists, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/artists/{artistId}")
    ResponseEntity<ArtistDTO> getArtistById(@PathVariable Long artistId) {
        Optional<ArtistDTO> artist = this.artistService.getArtistById(artistId);

        if (artist.isPresent()) {
            return new ResponseEntity<>(artist.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @DeleteMapping(value = "/artists/{artistId}")
    ResponseEntity<?> deleteArtistById(@PathVariable Long artistId) {
        this.artistService.deleteArtist(artistId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @PatchMapping(value = "/artists", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<ArtistDTO> updateArtist(@RequestBody ArtistDTO artistDTO) {
        ArtistDTO artistUpdated = this.artistService.saveArtist(artistDTO);
        return new ResponseEntity<>(artistUpdated, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/artists_filter", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Page<ArtistDTO>> getArtistsByCriteriaPaged(@RequestParam(value = "filter", required = false) String filter, Pageable pageable) {

        Page<ArtistDTO> artists = this.artistService.getArtistsByCriteriaStringPaged(pageable, filter);
        return new ResponseEntity<Page<ArtistDTO>>(artists, HttpStatus.OK);
    }


}
