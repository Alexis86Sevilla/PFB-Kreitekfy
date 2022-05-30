package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.persistence.AlbumPersistence;
import com.PFBKreitekfy.Music.infraestructure.specs.AlbumSpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.SongSpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.SearchCriteriaHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AlbumPersistenceImpl implements AlbumPersistence {

    private final AlbumRepository albumRepository;

    @Autowired
    public AlbumPersistenceImpl(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    @Override
    public List<Album> getAllAlbums() {
        return this.albumRepository.findAll();
    }

    @Override
    public Optional<Album> getAlbumById(Long albumId) {
        return this.albumRepository.findById(albumId);
    }

    @Override
    public Album saveAlbum(Album album) {
        return this.albumRepository.save(album);
    }

    @Override
    public void deleteAlbum(Long albumId) {
        this.albumRepository.deleteById(albumId);

    }

    @Override
    public Page<Album> findAll(Pageable pageable, String filters) {
        AlbumSpecification specification = new AlbumSpecification(SearchCriteriaHelper.fromFilterString(filters));
        return this.albumRepository.findAll(specification, pageable);
    }
}
