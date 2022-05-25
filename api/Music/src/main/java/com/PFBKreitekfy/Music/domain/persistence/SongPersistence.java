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

    Song modifySong(Long songId);

    List<Song> getSongByStyle(Long styleId);

    List<Song> getSongByArtist(Long artistId);

    List<Song> getSongByAlbum(Long albumId);

    Page<Song> findAll(Pageable pageable, String filter);




}
