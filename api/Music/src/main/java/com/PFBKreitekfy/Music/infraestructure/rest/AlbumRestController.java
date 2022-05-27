package com.PFBKreitekfy.Music.infraestructure.rest;

import com.PFBKreitekfy.Music.application.dto.AlbumDTO;
import com.PFBKreitekfy.Music.application.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AlbumRestController {
    private final AlbumService albumService;

    @Autowired
    public AlbumRestController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @CrossOrigin
    @PostMapping(value = "/albums", produces = "application/json", consumes = "application/json")
    ResponseEntity<AlbumDTO> insertAlbum(@RequestBody AlbumDTO albumDTO) {
        albumDTO = this.albumService.saveAlbum(albumDTO);
        return new ResponseEntity<>(albumDTO, HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping(value = "/albums", produces = "application/json")
    ResponseEntity<List<AlbumDTO>> getAllAlbums() {
        List<AlbumDTO> albums = this.albumService.getAllAlbums();
        return new ResponseEntity<>(albums, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/albums/{albumId}")
    ResponseEntity<AlbumDTO> getItemById(@PathVariable Long albumId) {
        Optional<AlbumDTO> album = this.albumService.getAlbumById(albumId);

        if (album.isPresent()) {
            return new ResponseEntity<>(album.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @DeleteMapping(value = "/albums/{albumId}")
    ResponseEntity<?> deleteAlbumById(@PathVariable Long albumId) {
        this.albumService.deleteAlbum(albumId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
