package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.RatingPK;
import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RatingRepository extends JpaRepository<Rating, RatingPK> {
    Optional<Rating> findById(RatingPK ratingId);

}
