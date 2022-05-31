package com.PFBKreitekfy.Music.infraestructure.rest;

import com.PFBKreitekfy.Music.application.dto.SongDTO;
import com.PFBKreitekfy.Music.application.service.SongService;
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
public class SongRestController {

    private final SongService songService;
    @Autowired
    public SongRestController(SongService songService) {
        this.songService = songService;
    }

    @CrossOrigin
    @GetMapping(value = "/albums/{albumId}/songs", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<SongDTO>> getAllSongsByAlbum(@PathVariable Long albumId) {
        List<SongDTO> songs = this.songService.getSongsByAlbum(albumId);
        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/artists/{artistId}/songs", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<SongDTO>> getAllSongsByArtist(@PathVariable Long artistId) {
        List<SongDTO> songs = this.songService.getSongsByArtist(artistId);
        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/styles/{styleId}/songs", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<SongDTO>> getAllSongsByStyles(@PathVariable Long styleId) {
        List<SongDTO> songs = this.songService.getSongsByStyle(styleId);
        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/songs/{songId}", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<SongDTO> getSongById(@PathVariable Long songId) {
        Optional<SongDTO> song = this.songService.getSongById(songId);
        if (song.isPresent()) {
            return new ResponseEntity<>(song.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PatchMapping(value = "/songs", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<SongDTO> updateItem(@RequestBody SongDTO songDTO) {
        SongDTO songUpdated = this.songService.saveSong(songDTO);
        return new ResponseEntity<>(songUpdated, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(value = "/songs", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<SongDTO> insertSong(@RequestBody SongDTO songDTO) {
        SongDTO songSaved = this.songService.saveSong(songDTO);
        return new ResponseEntity<>(songSaved, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(value = "/songs/{songId}")
    ResponseEntity<?> deleteSongById(@PathVariable Long songId) {
        this.songService.deleteSong(songId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/songs", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Page<SongDTO>> getSongsByCriteriaPaged(@RequestParam(value = "filter", required = false) String filter, Pageable pageable) {

        Page<SongDTO> songs = this.songService.getSongsByCriteriaStringPaged(pageable, filter);
        return new ResponseEntity<Page<SongDTO>>(songs, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/songs_filter", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<SongDTO>> getAllSongs() {
        List<SongDTO> songs = this.songService.getAllSongs();
        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

}
