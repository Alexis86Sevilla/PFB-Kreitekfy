package com.PFBKreitekfy.Music.infraestructure.rest;

import com.PFBKreitekfy.Music.application.dto.AlbumDTO;
import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.dto.SongDTO;
import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.application.service.RatingService;
import com.PFBKreitekfy.Music.application.service.SongService;
import com.PFBKreitekfy.Music.application.service.ViewsService;
import com.PFBKreitekfy.Music.domain.entity.Style;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class SongRestController {

    private final SongService songService;

    private final ViewsService viewService;
    private final RatingService ratingService;

    @Autowired
    public SongRestController(SongService songService, ViewsService viewService, RatingService ratingService) {
        this.songService = songService;
        this.viewService = viewService;
        this.ratingService = ratingService;
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
    @GetMapping(value = "/songs_filter", produces = "application/json")
    ResponseEntity<List<SongDTO>> getAllSongs(@RequestParam(name = "partialName", required = false) String partialName) {
        List<SongDTO> songs;

        if (partialName == null) {
            songs = this.songService.getAllSongs();
        } else {
            songs = this.songService.getSongsByName(partialName);
        }
        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/songs_views", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Optional<SongDTO>>> getFiveSongsByViews () {
        List<ViewsDTO> viewsDTOS = viewService.getAllViews();
        Collections.sort(viewsDTOS, new Comparator<ViewsDTO>() {
            @Override
            public int compare(ViewsDTO o1, ViewsDTO o2) {
                return o1.getQuantity().compareTo(o2.getQuantity());
            }
        });
        Collections.reverse(viewsDTOS);
        List<Optional<SongDTO>> songs = new ArrayList<>();
        for( int i = 0; i<5; i++){
            Optional<SongDTO> songDTO = songService.getSongById(viewsDTOS.get(i).getSongId());
            songs.add(songDTO);
        }

        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/songs_ratings", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Optional<SongDTO>>> getFiveSongsByRatings () {
        List<RatingDTO> ratingDTOS = ratingService.getAllRatings();
        Collections.sort(ratingDTOS, new Comparator<RatingDTO>() {
            @Override
            public int compare(RatingDTO o1, RatingDTO o2) {
                return o1.getQuantity().compareTo(o2.getQuantity());
            }
        });
        Collections.reverse(ratingDTOS);
        List<Optional<SongDTO>> songs = new ArrayList<>();
        for( int i = 0; i<5; i++){
            Optional<SongDTO> songDTO = songService.getSongById(ratingDTOS.get(i).getSongId());
            songs.add(songDTO);
        }

        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/songs_foryou", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Optional<SongDTO>>> getSongsForYou (@PathVariable Long userId) {
        //1. obtener la lista con todos los ratings de un usuario

        List<RatingDTO> ratingDTOS = ratingService.getAllRatingsByUserId(userId);

        //2. Obtener las cancionesDTO de esta lista

        List<Optional<SongDTO>> songs = new ArrayList<>();
        for( int i = 0; i<ratingDTOS.size(); i++){
            Optional<SongDTO> songDTO = songService.getSongById(ratingDTOS.get(i).getSongId());
            songs.add(songDTO);
        }

        //3. Buscar por el estilo más escuchado

        List<Style> styles = new ArrayList<>();
        for( int i = 0; i<songs.size(); i++){
            int idStyle = songs.get(i).getStyleId();
            styles.add();
        }


        List<RatingDTO> yourRatings = new ArrayList<>();
        for( int i = 0; i<2; i++){
            yourRatings.add(ratingDTOS.get(i));
        }

        //getAllSongsByStyle con más de tres estrellas
        //get5SongsByStyle con el mayor número de reproducciones


        List<Optional<SongDTO>> songs = new ArrayList<>();
        for( int i = 0; i<5; i++){
            Optional<SongDTO> songDTO = songService.getSongById(ratingDTOS.get(i).getSongId());
            songs.add(songDTO);
        }

        return new ResponseEntity<>(songs, HttpStatus.OK);
    }
}
