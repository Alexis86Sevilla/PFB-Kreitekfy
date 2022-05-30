package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Rating;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {UserMapper.class, SongMapper.class})
public interface RatingMapper extends EntityMapper<RatingDTO, Rating> {

    default Rating fromId(Long id) {

        if (id == null) return null;

        Rating rating = new Rating();
        rating.setId(id);
        return rating;
    }

    @Override
    @Mapping(source = "songId", target = "song")
    @Mapping(source = "userId", target = "user")
    Rating toEntity(RatingDTO dto);


    @Override
    @Mapping(source = "song.id", target = "songId")
    @Mapping(source = "user.id", target = "userId")
    RatingDTO toDto(Rating entity);
}
