package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Style;
import com.PFBKreitekfy.Music.domain.persistence.StylePersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class StylePersistenceImpl implements StylePersistence {

    private final StyleRepository styleRepository;

    @Autowired
    public StylePersistenceImpl(StyleRepository styleRepository) {
        this.styleRepository = styleRepository;
    }

    @Override
    public List<Style> getAllStyles() {
        return this.styleRepository.findAll();
    }

    @Override
    public Optional<Style> getStyleById(Long styleId) {
        return this.styleRepository.findById(styleId);
    }

    @Override
    public Style saveStyle(Style style) {
        return this.styleRepository.save(style);
    }
}
