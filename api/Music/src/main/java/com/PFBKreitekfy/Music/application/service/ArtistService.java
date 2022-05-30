package com.PFBKreitekfy.Music.application.service;

import com.PFBKreitekfy.Music.application.dto.AlbumDTO;
import com.PFBKreitekfy.Music.application.dto.ArtistDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;
import java.util.Optional;

public interface ArtistService {
    List<ArtistDTO> getAllArtists();

    Optional<ArtistDTO> getArtistById(Long artistId);

    ArtistDTO saveArtist(ArtistDTO artist);

    void deleteArtist(Long artistId);

    Page<ArtistDTO> getArtistsByCriteriaStringPaged(Pageable pageable, String filter);
}
