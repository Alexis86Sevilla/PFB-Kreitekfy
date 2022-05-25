package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.AlbumDTO;
import com.PFBKreitekfy.Music.application.mapper.AlbumMapper;
import com.PFBKreitekfy.Music.application.service.AlbumService;
import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.persistance.AlbumPersistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlbumServiceImpl implements AlbumService {
    private final AlbumPersistance persistence;
    private final AlbumMapper mapper;

    @Autowired
    public AlbumServiceImpl(AlbumPersistance persistence, AlbumMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<AlbumDTO> getAllAlbums() {
        List<Album> albums = this.persistence.getAllAlbums();
        return this.mapper.toDto(albums);
    }

    @Override
    public Optional<AlbumDTO> getAlbumById(Long albumId) {
        return this.persistence.getAlbumById(albumId).map(mapper::toDto);
    }

    @Override
    public AlbumDTO saveAlbum(AlbumDTO album) {
        Album albumSaved = this.persistence.saveAlbum(this.mapper.toEntity(album));
        return this.mapper.toDto(albumSaved);
    }
}
