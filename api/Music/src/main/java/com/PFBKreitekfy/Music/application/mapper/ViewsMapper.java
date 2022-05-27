package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.domain.entity.User;
import com.PFBKreitekfy.Music.domain.entity.Views;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring", uses = {User.class, Song.class})
public interface ViewsMapper extends EntityMapper<ViewsDTO, Views> {

    @Override
    @Mapping(source = "userId", target = "user")
    @Mapping(source = "songId", target = "song")
    Views toEntity(ViewsDTO dto);


    @Override
    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.name", target = "userName")

    @Mapping(source = "song.id", target = "songId")
    @Mapping(source = "song.name", target = "songName")

    ViewsDTO toDto(Views entity);
}
