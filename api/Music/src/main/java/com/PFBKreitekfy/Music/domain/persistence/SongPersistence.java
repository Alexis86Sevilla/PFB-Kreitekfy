package com.PFBKreitekfy.Music.domain.persistence;


import com.PFBKreitekfy.Music.domain.entity.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface SongPersistence {

    List<Song> getAllSongs();

    Optional<Song> getSongById(Long songId);

    Song saveSong(Song song);

    void deleteSong(Long songId);

    List<Song> getSongsByStyle(Long styleId);

    List<Song> getSongsByArtist(Long artistId);

    List<Song> getSongsByAlbum(Long albumId);

    Page<Song> findAll(Pageable pageable, String filter);


}
