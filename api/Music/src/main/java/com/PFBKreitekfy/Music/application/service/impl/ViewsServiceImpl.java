package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.application.mapper.ViewsMapper;
import com.PFBKreitekfy.Music.application.service.ViewsService;
import com.PFBKreitekfy.Music.domain.entity.User;
import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.persistence.ViewsPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ViewsServiceImpl implements ViewsService {

    private final ViewsPersistence persistence;

    private final ViewsMapper mapper;

    @Autowired
    public ViewsServiceImpl(ViewsPersistence persistence, ViewsMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }


    @Override
    public List<ViewsDTO> getAllViews() {
        List<Views> views = this.persistence.getAllViews();
        return this.mapper.toDto(views);
    }

    @Override
    public Optional<ViewsDTO> getViewsById(Long viewsId) {
        return this.persistence.getViewsById(viewsId).map(mapper::toDto);
    }

    @Override
    public ViewsDTO saveViews(ViewsDTO viewsDTO) {
        Views viewsSaved = this.persistence.saveView(this.mapper.toEntity(viewsDTO));
        return this.mapper.toDto(viewsSaved);
    }

    @Override
    public void deleteViews(Long viewsId) {
        this.persistence.deleteView(viewsId);
    }
}
