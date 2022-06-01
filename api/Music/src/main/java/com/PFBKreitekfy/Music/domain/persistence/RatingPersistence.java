package com.PFBKreitekfy.Music.domain.persistence;


import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.RatingPK;

import java.util.List;
import java.util.Optional;

public interface RatingPersistence {

    Optional<Rating> getRatingById(RatingPK ratingId);

    Rating saveRating(Rating rating);

    void deleteRating(RatingPK ratingId);

    List<Rating> getAllRatings();

    List<Rating> getAllRatingsByUserId(Long userId);
}
