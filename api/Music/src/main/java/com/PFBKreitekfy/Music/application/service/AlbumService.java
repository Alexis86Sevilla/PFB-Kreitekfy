package com.PFBKreitekfy.Music.application.service;

import com.PFBKreitekfy.Music.application.dto.AlbumDTO;


import java.util.List;
import java.util.Optional;

public interface AlbumService {
    List<AlbumDTO> getAllAlbums();

    Optional<AlbumDTO> getAlbumById(Long albumId);

    AlbumDTO saveAlbum(AlbumDTO album);

    void deleteAlbum(Long albumId);
}
