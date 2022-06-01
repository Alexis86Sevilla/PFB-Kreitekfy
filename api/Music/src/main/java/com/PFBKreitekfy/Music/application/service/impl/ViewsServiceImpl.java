package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.application.mapper.ViewsMapper;
import com.PFBKreitekfy.Music.application.service.ViewsService;
import com.PFBKreitekfy.Music.domain.entity.User;
import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;
import com.PFBKreitekfy.Music.domain.persistence.ViewsPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional(readOnly = true)
    public List<ViewsDTO> getAllViews() {
        List<Views> views = this.persistence.getAllViews();
        return this.mapper.toDto(views);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<ViewsDTO> getViewsById(ViewsPK viewsId) {
        return this.persistence.getViewsById(viewsId).map(mapper::toDto);
    }

    @Override
    @Transactional
    public ViewsDTO saveViews(ViewsDTO viewsDTO) {
        Long quantity = 1L;
        Optional<Views> optionalViews = this.persistence.getViewsById(new ViewsPK(viewsDTO.getSongId(), viewsDTO.getUserId()));
        if(optionalViews.isPresent()){
            quantity += optionalViews.get().getQuantity();
        }
        viewsDTO.setQuantity(quantity);
        Views viewsSaved = this.persistence.saveView(this.mapper.toEntity(viewsDTO));
        return this.mapper.toDto(viewsSaved);
    }

    @Override
    @Transactional
    public void deleteViews(ViewsPK viewsId) {
        this.persistence.deleteView(viewsId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ViewsDTO> getAllViewsByUserId(Long userId) {
        List<Views> views = this.persistence.getAllViewsByUserId(userId);
        return this.mapper.toDto(views);
    }
}
