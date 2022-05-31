package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long>, JpaSpecificationExecutor<Album> {
    List<Album> findByNameContainsIgnoreCase(String name);

}
