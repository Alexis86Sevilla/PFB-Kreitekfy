package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long> {

    List<Song> findByStyle(Long styleId);

    List<Song> findByAlbum(Long styleId);

    List<Song> findByArtist(Long styleId);


}
