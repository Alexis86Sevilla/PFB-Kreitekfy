package com.PFBKreitekfy.Music.domain.persistence;


import com.PFBKreitekfy.Music.domain.entity.Artist;

import java.util.List;
import java.util.Optional;

public interface ArtistPersistence {

    List<Artist> getAllArtists();

    Optional<Artist> getArtistById(Long artistId);

    Artist saveArtist(Artist artist);
}
