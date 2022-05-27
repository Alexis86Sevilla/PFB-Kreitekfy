package com.PFBKreitekfy.Music.domain.persistence;

<<<<<<< HEAD
import com.PFBKreitekfy.Music.domain.entity.Rating;

=======

import com.PFBKreitekfy.Music.domain.entity.Rating;

import java.util.List;
>>>>>>> 115c3302aff58d84546ae14440e9335962b41817
import java.util.Optional;

public interface RatingPersistence {

<<<<<<< HEAD
    Optional<Rating> getRatingById(Long ratingId);
=======
>>>>>>> 115c3302aff58d84546ae14440e9335962b41817

    Rating saveRating(Rating rating);

    void deleteRating(Long ratingId);
<<<<<<< HEAD

=======
>>>>>>> 115c3302aff58d84546ae14440e9335962b41817
}
