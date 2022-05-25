package com.PFBKreitekfy.Music.infraestructure.persistance;

import com.PFBKreitekfy.Music.domain.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
}
