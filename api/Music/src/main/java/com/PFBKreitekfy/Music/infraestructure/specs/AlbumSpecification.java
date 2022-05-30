package com.PFBKreitekfy.Music.infraestructure.specs;

import com.PFBKreitekfy.Music.domain.entity.Album;
import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.EntitySpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class AlbumSpecification extends EntitySpecification<Album> implements Specification<Album> {


    public AlbumSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;
    }



}