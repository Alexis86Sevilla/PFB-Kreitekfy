package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "views")
public class Views {

    private Long id;

    private Long quantity;
}
