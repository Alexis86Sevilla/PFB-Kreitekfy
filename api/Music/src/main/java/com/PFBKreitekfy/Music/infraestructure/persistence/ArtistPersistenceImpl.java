package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.persistence.ArtistPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ArtistPersistenceImpl implements ArtistPersistence {

    private final ArtistRepository artistRepository;

    @Autowired
    public ArtistPersistenceImpl(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    @Override
    public List<Artist> getAllArtists() {
        return this.artistRepository.findAll();
    }

    @Override
    public Optional<Artist> getArtistById(Long artistId) {
        return this.artistRepository.findById(artistId);
    }

    @Override
    public Artist saveArtist(Artist artist) {
        return this.artistRepository.save(artist);
    }
}
