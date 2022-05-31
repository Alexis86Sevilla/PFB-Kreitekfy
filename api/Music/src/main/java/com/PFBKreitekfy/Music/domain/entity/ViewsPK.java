package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Objects;

public class ViewsPK implements Serializable {

    @Column
    private Long userId;
    @Column
    private Long songId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ViewsPK viewsPK = (ViewsPK) o;
        return userId.equals(viewsPK.userId) && songId.equals(viewsPK.songId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, songId);
    }
}
