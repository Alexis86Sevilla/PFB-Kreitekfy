package com.PFBKreitekfy.Music.application.service;


import com.PFBKreitekfy.Music.application.dto.SongDTO;


import java.util.List;
import java.util.Optional;

public interface SongService {
    List<SongDTO> getAllSongs();

    Optional<SongDTO> getSongById(Long songId);

    SongDTO saveSong(SongDTO song);

    void deleteSong(Long songId);

    List<SongDTO> getSongsByName(Long styleId);

    List<SongDTO> getSongsByStyle(Long styleId);

    List<SongDTO> getSongsByArtist(Long artistId);

    List<SongDTO> getSongsByAlbum(Long albumId);

}
