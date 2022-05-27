package com.PFBKreitekfy.Music.domain.persistence;



import com.PFBKreitekfy.Music.domain.entity.Rating;

import java.util.List;
import java.util.Optional;

public interface Views {

    List<Views> getAllViews();

    Optional<Views> getViewsById(Long viewId);

    Views saveRating(Views views);

    void deleteRating(Long viewId);
}
