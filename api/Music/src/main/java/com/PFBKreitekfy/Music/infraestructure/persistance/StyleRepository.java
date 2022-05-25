package com.PFBKreitekfy.Music.infraestructure.persistance;

import com.PFBKreitekfy.Music.domain.entity.Style;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StyleRepository extends JpaRepository<Style, Long> {
}
