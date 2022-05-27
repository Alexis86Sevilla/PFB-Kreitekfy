package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.StyleDTO;
import com.PFBKreitekfy.Music.domain.entity.Style;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StyleMapper extends EntityMapper<StyleDTO, Style> {

    default Style fromId(Long id) {

        if (id == null) return null;

        Style style = new Style();
        style.setId(id);
        return style;
    }
}
