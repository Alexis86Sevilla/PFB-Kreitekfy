package com.PFBKreitekfy.Music.application.service;


import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;

import java.util.List;
import java.util.Optional;

public interface ViewsService {

    List<ViewsDTO> getAllViews();

    Optional<ViewsDTO> getViewsById(ViewsPK viewsId);

    ViewsDTO saveViews(ViewsDTO views);

    void deleteViews(ViewsPK viewsId);

    List<ViewsDTO> getAllViewsByUserId(Long userId);
}
