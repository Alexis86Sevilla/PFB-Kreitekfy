package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Views;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;
import com.PFBKreitekfy.Music.domain.persistence.ViewsPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ViewsPersistenceImpl implements ViewsPersistence {

    private final ViewsRepository viewsRepository;

    @Autowired
    public ViewsPersistenceImpl(ViewsRepository viewsRepository) {
        this.viewsRepository = viewsRepository;
    }

    @Override
    public List<Views> getAllViews() {
        return this.viewsRepository.findAll();
    }

    @Override
    public Optional<Views> getViewsById(ViewsPK viewsId) {
        return this.viewsRepository.findById(viewsId);
    }

    @Override
    public Views saveView(Views views) {
        return this.viewsRepository.save(views);
    }

    @Override
    public void deleteView(ViewsPK viewId) {
        this.viewsRepository.deleteById(viewId);
    }

    @Override
    public List<Views> getAllViewsByUserId(Long userId) {
        return this.viewsRepository.findAllByUserId(userId);
    }
}
