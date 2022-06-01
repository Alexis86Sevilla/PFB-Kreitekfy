package com.PFBKreitekfy.Music.application.service;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.domain.entity.RatingPK;

import java.util.List;
import java.util.Optional;

public interface RatingService {

    Optional<RatingDTO> getRateById(RatingPK ratingId);

    RatingDTO saveRate(RatingDTO rate);

    void deleteRate(RatingPK ratingId);

    List<RatingDTO> getAllRatings();

    List<RatingDTO> getAllRatingsByUserId(Long userId);

}
