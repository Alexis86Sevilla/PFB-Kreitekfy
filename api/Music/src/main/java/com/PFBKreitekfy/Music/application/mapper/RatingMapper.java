package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.domain.entity.Rating;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {UserMapper.class, SongMapper.class})
public interface RatingMapper extends EntityMapper<RatingDTO, Rating> {

    @Override
    @Mapping(source = "songId", target = "song.id")
    @Mapping(source = "userId", target = "user")
    Rating toEntity(RatingDTO dto);


    @Override
    @Mapping(source = "song.id", target = "songId")
    @Mapping(source = "user.id", target = "userId")
    RatingDTO toDto(Rating entity);
}
