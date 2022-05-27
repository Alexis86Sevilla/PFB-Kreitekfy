package com.PFBKreitekfy.Music.application.service;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;

import java.util.Optional;

public interface RatingService {

    Optional<RatingDTO> getRatingById(Long ratingId);
    RatingDTO saveRating(RatingDTO ratingDTO);
    void deleteRating(Long ratingId);
}
