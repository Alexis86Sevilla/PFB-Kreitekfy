package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.dto.SongDTO;
import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.domain.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {User.class, Song.class})
public interface RatingMapper extends EntityMapper<RatingDTO, Rating> {

    @Override
    @Mapping(source = "userId", target = "user")
    @Mapping(source = "songId", target = "song")
    Rating toEntity(RatingDTO dto);


    @Override
    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.name", target = "userName")

    @Mapping(source = "song.id", target = "songId")
    @Mapping(source = "song.name", target = "songName")

    RatingDTO toDto(Rating entity);
}
