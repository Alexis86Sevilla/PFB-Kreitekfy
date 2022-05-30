package com.PFBKreitekfy.Music.infraestructure.specs;

import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.EntitySpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class ArtistSpecification extends EntitySpecification<Artist> implements Specification<Artist> {


    public ArtistSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;
    }



}