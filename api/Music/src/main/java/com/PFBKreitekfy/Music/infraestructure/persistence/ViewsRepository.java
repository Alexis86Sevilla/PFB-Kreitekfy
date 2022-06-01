package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface ViewsRepository extends JpaRepository<Views, ViewsPK>, JpaSpecificationExecutor<Views> {
    Optional<Views> findById(ViewsPK viewsId);
}
