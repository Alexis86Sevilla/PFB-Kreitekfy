package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.mapper.RatingMapper;
import com.PFBKreitekfy.Music.application.service.RatingService;
import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.RatingPK;
import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.persistence.RatingPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RatingServiceImpl implements RatingService {

    private final RatingPersistence persistence;

    private final RatingMapper mapper;

    @Autowired
    public RatingServiceImpl(RatingPersistence persistence, RatingMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<RatingDTO> getRateById(RatingPK rateId) {
        return this.persistence.getRatingById(rateId).map(mapper::toDto);
    }

    @Override
    @Transactional
    public RatingDTO saveRate(RatingDTO rate) {
        Rating rateSaved = this.persistence.saveRating(this.mapper.toEntity(rate));
        return this.mapper.toDto(rateSaved);
    }

    @Override
    @Transactional
    public void deleteRate(RatingPK ratingId) {
        this.persistence.deleteRating(ratingId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RatingDTO> getAllRatings() {
        List<Rating> rating = this.persistence.getAllRatings();
        return this.mapper.toDto(rating);
    }
}
