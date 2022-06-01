package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.domain.entity.Style;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface StyleRepository extends JpaRepository<Style, Long>, JpaSpecificationExecutor<Style> {

    List<Style> findByNameContainsIgnoreCase(String partialName);
}
