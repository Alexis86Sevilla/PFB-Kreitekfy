package com.PFBKreitekfy.Music.infraestructure.rest;

import com.PFBKreitekfy.Music.application.dto.AlbumDTO;
import com.PFBKreitekfy.Music.application.dto.SongDTO;
import com.PFBKreitekfy.Music.application.service.AlbumService;
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
public class AlbumRestController {
    private final AlbumService albumService;

    @Autowired
    public AlbumRestController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @CrossOrigin
    @PostMapping(value = "/albums", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<AlbumDTO> insertAlbum(@RequestBody AlbumDTO albumDTO) {
        albumDTO = this.albumService.saveAlbum(albumDTO);
        return new ResponseEntity<>(albumDTO, HttpStatus.CREATED);
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

    @CrossOrigin
    @PatchMapping(value = "/albums", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<AlbumDTO> updateAlbum(@RequestBody AlbumDTO albumDTO) {
        AlbumDTO albumUpdated = this.albumService.saveAlbum(albumDTO);
        return new ResponseEntity<>(albumUpdated, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/albums_filter", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Page<AlbumDTO>> getAlbumsByCriteriaPaged(@RequestParam(value = "filter", required = false) String filter, Pageable pageable) {
        Page<AlbumDTO> albums = this.albumService.getAlbumsByCriteriaStringPaged(pageable, filter);
        return new ResponseEntity<Page<AlbumDTO>>(albums, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/albums", produces = "application/json")
    ResponseEntity<List<AlbumDTO>> getAllAlbums(@RequestParam(name = "partialName", required = false) String partialName) {
        List<AlbumDTO> albums;

        if (partialName == null) {
            albums = this.albumService.getAllAlbums();
        } else {
            albums = this.albumService.getAlbumsByName(partialName);
        }
        return new ResponseEntity<>(albums, HttpStatus.OK);
    }
}
