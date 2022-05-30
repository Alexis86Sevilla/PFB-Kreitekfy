package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.persistence.ArtistPersistence;
import com.PFBKreitekfy.Music.infraestructure.specs.AlbumSpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.ArtistSpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.SearchCriteriaHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Override
    public void deleteArtist(Long artistId) {
        this.artistRepository.deleteById(artistId);
    }

    @Override
    public Page<Artist> findAll(Pageable pageable, String filter) {
        ArtistSpecification specification = new ArtistSpecification(SearchCriteriaHelper.fromFilterString(filter));
        return this.artistRepository.findAll(specification, pageable);
    }
}
