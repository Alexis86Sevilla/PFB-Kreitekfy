package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.domain.persistence.SongPersistence;
import com.PFBKreitekfy.Music.infraestructure.specs.SongSpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.SearchCriteriaHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class SongPersistenceImpl implements SongPersistence {

    private final SongRepository songRepository;

    @Autowired
    public SongPersistenceImpl(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @Override
    public List<Song> getAllSongs() {
        return this.songRepository.findAll();
    }

    @Override
    public Optional<Song> getSongById(Long songId) {
        return this.songRepository.findById(songId);
    }

    @Override
    public Song saveSong(Song song) {
        return this.songRepository.save(song);
    }

    @Override
    public void deleteSong(Long songId) {
        this.songRepository.deleteById(songId);
    }

    @Override
    public List<Song> getSongsByStyle(Long styleId) {
        return this.songRepository.findByStyle(styleId);
    }

    @Override
    public List<Song> getSongsByArtist(Long artistId) {
        return this.songRepository.findByArtist(artistId);
    }

    @Override
    public List<Song> getSongsByAlbum(Long albumId) {
        return this.songRepository.findByAlbum(albumId);
    }

    @Override
    public Page<Song> findAll(Pageable pageable, String filters) {
        SongSpecification specification = new SongSpecification(SearchCriteriaHelper.fromFilterString(filters));
        return this.songRepository.findAll(specification, pageable);
    }

}
