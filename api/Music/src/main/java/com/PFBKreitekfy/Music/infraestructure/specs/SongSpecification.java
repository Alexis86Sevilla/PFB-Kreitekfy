package com.PFBKreitekfy.Music.infraestructure.specs;

import com.PFBKreitekfy.Music.domain.entity.Song;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.EntitySpecification;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.SearchCriteria;
import com.PFBKreitekfy.Music.infraestructure.specs.shared.SearchOperation;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class SongSpecification extends EntitySpecification<Song> implements Specification<Song> {

    public SongSpecification() {
        this.criteria = new ArrayList<>();
    }
    public SongSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;
    }

    public void add(Object fieldValue, String fieldName, SearchOperation searchOperation){
        if (null!=fieldName && !fieldName.isEmpty() ){
            this.criteria.add(new SearchCriteria(fieldName,fieldValue,searchOperation));
        }
    }


    public static EntitySpecification<Song> filterByStyleId(Long styleId){
        SongSpecification spec = new  SongSpecification() ;
        if (styleId!=null){
            spec.add(styleId,"styleId",SearchOperation.EQUAL);
        }
        return spec;
    }

}