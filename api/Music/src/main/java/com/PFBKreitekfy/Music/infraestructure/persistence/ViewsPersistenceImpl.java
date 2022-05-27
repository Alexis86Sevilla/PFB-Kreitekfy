package com.PFBKreitekfy.Music.infraestructure.persistence;

import com.PFBKreitekfy.Music.domain.entity.Views;
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
    public Optional<Views> getViewsById(Long albumId) {
        return this.viewsRepository.findById(albumId);
    }

    @Override
    public Views saveView(Views views) {
        return this.viewsRepository.save(views);
    }

    @Override
    public void deleteView(Long viewId) {
        this.viewsRepository.deleteById(viewId);
    }
}
