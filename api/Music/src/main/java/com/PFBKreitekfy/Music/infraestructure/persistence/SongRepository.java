package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long>, JpaSpecificationExecutor<Song> {

    List<Song> findByStyle(Long styleId);

    List<Song> findByAlbum(Long styleId);

    List<Song> findByArtist(Long styleId);

    List<Song> findByNameContainsIgnoreCase(String partialName);
}
