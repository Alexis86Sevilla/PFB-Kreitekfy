package com.PFBKreitekfy.Music.infraestructure.persistance;

import com.PFBKreitekfy.Music.domain.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {
}
