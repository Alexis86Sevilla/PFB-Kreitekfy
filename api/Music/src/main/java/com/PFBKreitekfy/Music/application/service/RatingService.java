package com.PFBKreitekfy.Music.application.service;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.dto.ViewsDTO;

import java.util.Optional;

public interface RatingService {

    Optional<RatingDTO> getRateById(Long rateId);

    RatingDTO saveRate(RatingDTO rate);

    void deleteRate(Long rateId);
}
