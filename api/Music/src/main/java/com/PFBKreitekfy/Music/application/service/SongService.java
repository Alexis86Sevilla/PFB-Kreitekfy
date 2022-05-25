package com.PFBKreitekfy.Music.application.service;


import com.PFBKreitekfy.Music.application.dto.SongDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface SongService {
    List<SongDTO> getAllSongs();

    Optional<SongDTO> getSongById(Long songId);

    SongDTO saveSong(SongDTO song);

    void deleteSong(Long songId);

    SongDTO modifySong(Long songId);

    List<SongDTO> getSongByStyle(Long styleId);

    List<SongDTO> getSongByArtist(Long artistId);

    List<SongDTO> getSongByAlbum(Long albumId);

    Page<SongDTO> findAll(Pageable pageable, String filter);
}
