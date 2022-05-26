package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "ratings")
public class Rating {

    private Long id;

    private Long quantity;

    private Long userId;

    private Long songId;
}
