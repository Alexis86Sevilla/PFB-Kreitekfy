package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.Column;
import java.io.Serializable;
import java.util.Objects;

public class ViewsPK implements Serializable {

    @Column
    private Long userId;
    @Column
    private Long songId;

    public ViewsPK(Long songId, Long userId) {
        this.userId = userId;
        this.songId = songId;
    }

    public ViewsPK(){

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
