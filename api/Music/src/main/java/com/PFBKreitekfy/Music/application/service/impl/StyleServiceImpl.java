package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.StyleDTO;
import com.PFBKreitekfy.Music.application.mapper.StyleMapper;
import com.PFBKreitekfy.Music.application.service.StyleService;
import com.PFBKreitekfy.Music.domain.entity.Style;
import com.PFBKreitekfy.Music.domain.persistance.StylePersistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StyleServiceImpl implements StyleService {
    private final StylePersistance persistence;
    private final StyleMapper mapper;

    @Autowired
    public StyleServiceImpl(StylePersistance persistence, StyleMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<StyleDTO> getAllStyles() {
        List<Style> styles = this.persistence.getAllStyles();
        return this.mapper.toDto(styles);
    }

    @Override
    public Optional<StyleDTO> getStyleById(Long styleId) {
        return this.persistence.getStyleById(styleId).map(mapper::toDto);
    }

    @Override
    public StyleDTO saveStyle(StyleDTO style) {
        Style styleSaved = this.persistence.saveStyle(this.mapper.toEntity(style));
        return this.mapper.toDto(styleSaved);
    }
}
