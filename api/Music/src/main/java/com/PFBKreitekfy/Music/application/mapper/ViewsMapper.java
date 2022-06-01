package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;



@Mapper(componentModel = "spring", uses = {UserMapper.class, SongMapper.class})
public interface ViewsMapper extends EntityMapper<ViewsDTO, Views> {

    default Views fromId(Long songId, Long userId) {

        if (userId == null || songId == null) return null;

        Views views = new Views();
        views.setUserId(userId);
        views.setSongId(songId);
        return views;
    }

    @Override
    Views toEntity(ViewsDTO dto);

    @Override
    ViewsDTO toDto(Views entity);
}
