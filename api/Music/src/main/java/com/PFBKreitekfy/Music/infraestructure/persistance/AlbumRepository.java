package com.PFBKreitekfy.Music.infraestructure.persistance;

import com.PFBKreitekfy.Music.domain.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumRepository extends JpaRepository<Album, Long> {
}
