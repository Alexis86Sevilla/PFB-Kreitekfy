package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.Positive;

@Entity
@Table(name = "views")
public class Views {

    public Views() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "viewsSequence")
    private Long id;

    @Column
    @Positive
    private Long quantity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "song_id")
    private Song song;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
