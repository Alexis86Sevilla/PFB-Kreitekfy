package com.PFBKreitekfy.Music.application.service;

import com.PFBKreitekfy.Music.application.dto.ArtistDTO;


import java.util.List;
import java.util.Optional;

public interface ArtistService {
    List<ArtistDTO> getAllArtists();

    Optional<ArtistDTO> getArtistById(Long artistId);

    ArtistDTO saveArtist(ArtistDTO artist);

    void deleteArtist(Long artistId);
}
