package com.PFBKreitekfy.Music.domain.persistence;

import com.PFBKreitekfy.Music.domain.entity.Rating;

import java.util.Optional;

public interface RatingPersistence {

    Optional<Rating> getRatingById(Long ratingId);

    Rating saveRating(Rating rating);

    void deleteRating(Long ratingId);

}
