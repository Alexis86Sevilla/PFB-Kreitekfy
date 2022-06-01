package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.RatingPK;
import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.persistence.RatingPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class RatingPersistenceImpl implements RatingPersistence {

    private final RatingRepository ratingRepository;

    @Autowired
    public RatingPersistenceImpl(RatingRepository viewsRepository) {
        this.ratingRepository = viewsRepository;
    }

    @Override
    public Optional<Rating> getRatingById(RatingPK ratingId) {
        return this.ratingRepository.findById(ratingId);
    }

    @Override
    public Rating saveRating(Rating rating) {
        return this.ratingRepository.save(rating);
    }

    @Override
    public void deleteRating(RatingPK ratingId) {
        this.ratingRepository.deleteById(ratingId);
    }

    @Override
    public List<Rating> getAllRatings() {
        return this.ratingRepository.findAll();
    }

    @Override
    public List<Rating> getAllRatingsByUserId(Long userId) {
        return this.ratingRepository.findAllById(userId);
    }


}
