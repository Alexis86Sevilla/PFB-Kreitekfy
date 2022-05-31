package com.PFBKreitekfy.Music.infraestructure.rest;

import com.PFBKreitekfy.Music.application.dto.ArtistDTO;
import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.application.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RatingRestController {

    private final RatingService ratingService;

    @Autowired
    public RatingRestController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @CrossOrigin
    @GetMapping(value = "/ratings/{ratingId}")
    ResponseEntity<RatingDTO> getRatingById(@PathVariable Long ratingId) {
        Optional<RatingDTO> rating = this.ratingService.getRateById(ratingId);

        if (rating.isPresent()) {
            return new ResponseEntity<>(rating.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/ratings", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<RatingDTO> insertRating(@RequestBody RatingDTO ratingDTO) {
        RatingDTO ratingSaved = this.ratingService.saveRate(ratingDTO);
        return new ResponseEntity<>(ratingSaved, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(value = "/ratings/{ratingId}")
    ResponseEntity<?> deleteRatingById(@PathVariable Long ratingId) {
        this.ratingService.deleteRate(ratingId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @PatchMapping(value = "/ratings", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<RatingDTO> updateRating(@RequestBody RatingDTO ratingDTO) {
        RatingDTO ratingUpdated = this.ratingService.saveRate(ratingDTO);
        return new ResponseEntity<>(ratingUpdated, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/ratings", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<RatingDTO>> getAllRatings() {
        List<RatingDTO> ratings = this.ratingService.getAllRatings();
        return new ResponseEntity<>(ratings, HttpStatus.OK);
    }
}
