package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.mapper.RatingMapper;
import com.PFBKreitekfy.Music.application.service.RatingService;
import com.PFBKreitekfy.Music.domain.persistence.RatingPersistence;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RatingServiceImpl implements RatingService {

    private final RatingPersistence persistence;
    private final RatingMapper mapper;

    public RatingServiceImpl(RatingPersistence persistence, RatingMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public Optional<RatingDTO> getRatingById(Long ratingId) {
        return this.persistence.getRatingById(ratingId).map(mapper::toDto);
    }

    @Override
    public RatingDTO saveRating(RatingDTO ratingDTO) {
        return null;
    }

    @Override
    public void deleteRating(Long ratingId) {
        this.persistence.deleteRating(ratingId);
    }
}
