package com.PFBKreitekfy.Music.application.service;


import com.PFBKreitekfy.Music.application.dto.ViewsDTO;

import java.util.List;
import java.util.Optional;

public interface ViewsService {

    List<ViewsDTO> getAllViews();

    Optional<ViewsDTO> getViewsById(Long viewsId);

    ViewsDTO saveViews(ViewsDTO views);

    void deleteViews(Long viewsId);
}
