package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.Views;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {UserMapper.class, SongMapper.class})
public interface RatingMapper extends EntityMapper<RatingDTO, Rating> {

    default Views fromId(Long songId, Long userId) {

        if (userId == null || songId == null) return null;

        Views views = new Views();
        views.setUserId(userId);
        views.setSongId(songId);
        return views;
    }

    @Override
    Rating toEntity(RatingDTO dto);


    @Override
    RatingDTO toDto(Rating entity);
}
