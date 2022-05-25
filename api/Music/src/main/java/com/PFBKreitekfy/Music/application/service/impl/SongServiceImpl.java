package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.SongDTO;
import com.PFBKreitekfy.Music.application.mapper.SongMapper;
import com.PFBKreitekfy.Music.application.service.SongService;
import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.domain.persistence.SongPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SongServiceImpl implements SongService {
    private final SongPersistence persistence;
    private final SongMapper mapper;

    @Autowired
    public SongServiceImpl(SongPersistence persistence, SongMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<SongDTO> getAllSongs() {
        List<Song> songs = this.persistence.getAllSongs();
        return this.mapper.toDto(songs);
    }

    @Override
    public Optional<SongDTO> getSongById(Long songId) {
        return this.persistence.getSongById(songId).map(mapper::toDto);
    }

    @Override
    public SongDTO saveSong(SongDTO song) {
        Song songSaved = this.persistence.saveSong(this.mapper.toEntity(song));
        return this.mapper.toDto(songSaved);
    }

    @Override
    public void deleteSong(Long songId) {
        this.persistence.deleteSong(songId);
    }

    @Override
    public SongDTO modifySong(Long songId) {
        return null;
    }

    @Override
    public List<SongDTO> getSongByStyle(Long styleId) {
        return null;
    }

    @Override
    public List<SongDTO> getSongByArtist(Long artistId) {
        return null;
    }

    @Override
    public List<SongDTO> getSongByAlbum(Long albumId) {
        return null;
    }

    @Override
    public Page<SongDTO> findAll(Pageable pageable, String filter) {
        return null;
    }
}
