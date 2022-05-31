package com.PFBKreitekfy.Music.domain.persistence;


import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.Views;

import java.util.List;
import java.util.Optional;

public interface RatingPersistence {

    Optional<Rating> getRatingById(Long ratingId);

    Rating saveRating(Rating rating);

    void deleteRating(Long ratingId);

    List<Rating> getAllRatings();

}
