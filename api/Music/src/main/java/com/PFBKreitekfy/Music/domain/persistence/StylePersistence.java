package com.PFBKreitekfy.Music.domain.persistence;


import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.domain.entity.Style;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface StylePersistence {

    List<Style> getAllStyles();

    Optional<Style> getStyleById(Long styleId);

    Style saveStyle(Style style);

    void deleteStyle(Long styleId);

    Page<Style> findAll(Pageable pageable, String filter);

    List<Style> getStylesByName(String partialName);
}
