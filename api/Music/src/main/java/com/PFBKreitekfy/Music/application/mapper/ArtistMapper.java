package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.ArtistDTO;
import com.PFBKreitekfy.Music.domain.entity.Artist;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ArtistMapper extends EntityMapper<ArtistDTO, Artist> {

    default Artist fromId(Long id) {

        if (id == null) return null;

        Artist artist = new Artist();
        artist.setId(id);
        return artist;
    }
}
