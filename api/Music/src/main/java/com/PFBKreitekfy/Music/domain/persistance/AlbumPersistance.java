package com.PFBKreitekfy.Music.domain.persistance;

import com.PFBKreitekfy.Music.domain.entity.Album;


import java.util.List;
import java.util.Optional;

public interface AlbumPersistance {

    List<Album> getAllAlbums();

    Optional<Album> getAlbumById(Long albumId);

    Album saveAlbum(Album album);
}
