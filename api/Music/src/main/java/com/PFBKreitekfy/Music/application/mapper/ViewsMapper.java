package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.domain.entity.Views;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;



@Mapper(componentModel = "spring", uses = {UserMapper.class, SongMapper.class})
public interface ViewsMapper extends EntityMapper<ViewsDTO, Views> {

    @Override
    @Mapping(source = "songId", target = "song.id")
    @Mapping(source = "userId", target = "user")
    Views toEntity(ViewsDTO dto);


    @Override
    @Mapping(source = "song.id", target = "songId")
    @Mapping(source = "user.id", target = "userId")
    ViewsDTO toDto(Views entity);
}
