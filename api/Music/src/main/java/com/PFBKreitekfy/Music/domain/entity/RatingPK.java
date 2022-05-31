package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.Column;
import java.io.Serializable;
import java.util.Objects;

public class RatingPK implements Serializable {
    @Column
    private Long userId;
    @Column
    private Long songId;

    public RatingPK() {
    }

    public RatingPK(Long songId, Long userId) {
        this.userId = userId;
        this.songId = songId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RatingPK ratingPK = (RatingPK) o;
        return userId.equals(ratingPK.userId) && songId.equals(ratingPK.songId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, songId);
    }
}
