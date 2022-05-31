package com.PFBKreitekfy.Music.domain.persistence;

import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


public interface AlbumPersistence {

    List<Album> getAllAlbums();

    Optional<Album> getAlbumById(Long albumId);

    Album saveAlbum(Album album);

    void deleteAlbum(Long albumId);

    Page<Album> findAll(Pageable pageable, String filter);

    List<Album> getAlbumsByName(String partialName);
}
