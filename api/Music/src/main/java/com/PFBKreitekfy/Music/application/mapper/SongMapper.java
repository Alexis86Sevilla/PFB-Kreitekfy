package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.SongDTO;
import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.entity.Song;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {AlbumMapper.class, ArtistMapper.class, StyleMapper.class})
public interface SongMapper extends EntityMapper<SongDTO, Song> {

    @Override
    @Mapping(source = "albumId", target = "album")
    @Mapping(source = "artistId", target = "artist")
    @Mapping(source = "styleId", target = "style")
    Song toEntity(SongDTO dto);


    @Override
    @Mapping(source = "album.id", target = "albumId")
    @Mapping(source = "album.name", target = "albumName")

    @Mapping(source = "artist.id", target = "artistId")
    @Mapping(source = "artist.name", target = "artistName")

    @Mapping(source = "style.id", target = "styleId")
    @Mapping(source = "style.name", target = "styleName")
    SongDTO toDto(Song entity);
}
