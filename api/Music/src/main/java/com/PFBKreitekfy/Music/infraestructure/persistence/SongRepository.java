package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long>, JpaSpecificationExecutor<Song> {

    List<Song> findByStyle(Long styleId);

    @Query("SELECT s FROM Song AS s , Rating AS r WHERE s.style.id IN (:styleIds) and r.songId = s.id and r.quantity > 3 and r.userId= :userId ORDER BY r.quantity ")
    List<Song> findByStyle(Long userId, List<Long> styleIds);


    List<Song> findByAlbum(Long styleId);

    List<Song> findByArtist(Long styleId);

    List<Song> findByNameContainsIgnoreCase(String partialName);
}
