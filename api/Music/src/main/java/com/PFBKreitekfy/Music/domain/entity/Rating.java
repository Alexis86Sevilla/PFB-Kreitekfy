package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import java.util.Objects;

@Entity
@Table(name = "ratings")
@IdClass(value = RatingPK.class)
public class Rating {


    @Id
    private Long userId;

    @Id
    private Long songId;

    @Column
    @Positive
    private Long quantity;

    public Rating() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getSongId() {
        return songId;
    }

    public void setSongId(Long songId) {
        this.songId = songId;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rating rating = (Rating) o;
        return userId.equals(rating.userId) && songId.equals(rating.songId) && quantity.equals(rating.quantity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, songId, quantity);
    }
}
