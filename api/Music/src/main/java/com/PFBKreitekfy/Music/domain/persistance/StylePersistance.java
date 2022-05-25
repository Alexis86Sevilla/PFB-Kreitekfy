package com.PFBKreitekfy.Music.domain.persistance;


import com.PFBKreitekfy.Music.domain.entity.Style;

import java.util.List;
import java.util.Optional;

public interface StylePersistance {

    List<Style> getAllStyles();

    Optional<Style> getStyleById(Long styleId);

    Style saveStyle(Style style);
}
