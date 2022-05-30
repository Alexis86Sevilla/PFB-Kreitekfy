package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Views;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;



@Mapper(componentModel = "spring", uses = {UserMapper.class, SongMapper.class})
public interface ViewsMapper extends EntityMapper<ViewsDTO, Views> {

    default Views fromId(Long id) {

        if (id == null) return null;

        Views views = new Views();
        views.setId(id);
        return views;
    }
    @Override
    @Mapping(source = "songId", target = "song")
    @Mapping(source = "userId", target = "user")
    Views toEntity(ViewsDTO dto);

    @Override
    @Mapping(source = "song.id", target = "songId")
    @Mapping(source = "user.id", target = "userId")
    ViewsDTO toDto(Views entity);
}
