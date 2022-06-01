package com.PFBKreitekfy.Music.application.service;

import com.PFBKreitekfy.Music.application.dto.AlbumDTO;
import com.PFBKreitekfy.Music.application.dto.SongDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;
import java.util.Optional;

public interface AlbumService {
    List<AlbumDTO> getAllAlbums();

    Optional<AlbumDTO> getAlbumById(Long albumId);

    AlbumDTO saveAlbum(AlbumDTO albumDTO);

    void deleteAlbum(Long albumId);

    Page<AlbumDTO> getAlbumsByCriteriaStringPaged(Pageable pageable, String filter);

    List<AlbumDTO> getAlbumsByName(String partialName);
}
