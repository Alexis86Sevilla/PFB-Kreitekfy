package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ViewsRepository extends JpaRepository<Views, ViewsPK>, JpaSpecificationExecutor<Views> {

    Optional<Views> findById(ViewsPK viewsId);

    @Query("SELECT v FROM Views AS v WHERE v.userId= :userId")
    List<Views> findAllByUserId(Long userId);
}
