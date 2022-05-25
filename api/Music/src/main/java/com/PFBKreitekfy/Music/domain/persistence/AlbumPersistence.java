package com.PFBKreitekfy.Music.domain.persistence;

import com.PFBKreitekfy.Music.domain.entity.Album;


import java.util.List;
import java.util.Optional;

public interface AlbumPersistence {

    List<Album> getAllAlbums();

    Optional<Album> getAlbumById(Long albumId);

    Album saveAlbum(Album album);
}
