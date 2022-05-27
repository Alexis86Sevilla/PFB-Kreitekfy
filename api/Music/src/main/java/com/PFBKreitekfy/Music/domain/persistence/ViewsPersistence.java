package com.PFBKreitekfy.Music.domain.persistence;

import com.PFBKreitekfy.Music.domain.entity.Views;

import java.util.List;
import java.util.Optional;

public interface ViewsPersistence {

    List<Views> getAllViews();

    Optional<Views> getViewsById(Long albumId);

    Views saveView(Views views);

    void deleteView(Long viewId);
}
