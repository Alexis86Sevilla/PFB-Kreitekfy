package com.PFBKreitekfy.Music.domain.persistence;


import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Artist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ArtistPersistence {

    List<Artist> getAllArtists();

    Optional<Artist> getArtistById(Long artistId);

    Artist saveArtist(Artist artist);

    void deleteArtist(Long artistId);

    Page<Artist> findAll(Pageable pageable, String filter);

    List<Artist> getArtistsByName(String partialName);
}
