package com.PFBKreitekfy.Music.domain.persistence;

import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;

import java.util.List;
import java.util.Optional;

public interface ViewsPersistence {

    List<Views> getAllViews();

    Optional<Views> getViewsById(ViewsPK viewsId);

    Views saveView(Views views);

    void deleteView(ViewsPK viewId);

    List<Views> getAllViewsByUserId(Long userId);
}
