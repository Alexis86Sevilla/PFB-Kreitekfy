package com.PFBKreitekfy.Music.domain.persistance;


import com.PFBKreitekfy.Music.domain.entity.Artist;

import java.util.List;
import java.util.Optional;

public interface ArtistPersistance {

    List<Artist> getAllArtists();

    Optional<Artist> getArtistById(Long artistId);

    Artist saveArtist(Artist artist);
}
