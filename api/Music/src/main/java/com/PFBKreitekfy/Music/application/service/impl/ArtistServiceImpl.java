package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.ArtistDTO;
import com.PFBKreitekfy.Music.application.mapper.ArtistMapper;
import com.PFBKreitekfy.Music.application.service.ArtistService;
import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.persistance.ArtistPersistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtistServiceImpl implements ArtistService {
    private final ArtistPersistance persistence;
    private final ArtistMapper mapper;

    @Autowired
    public ArtistServiceImpl(ArtistPersistance persistence, ArtistMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<ArtistDTO> getAllArtists() {
        List<Artist> artist = this.persistence.getAllArtists();
        return this.mapper.toDto(artist);
    }

    @Override
    public Optional<ArtistDTO> getArtistById(Long artistId) {
        return this.persistence.getArtistById(artistId).map(mapper::toDto);
    }

    @Override
    public ArtistDTO saveArtist(ArtistDTO artist) {
        Artist artistSaved = this.persistence.saveArtist(this.mapper.toEntity(artist));
        return this.mapper.toDto(artistSaved);
    }
}
