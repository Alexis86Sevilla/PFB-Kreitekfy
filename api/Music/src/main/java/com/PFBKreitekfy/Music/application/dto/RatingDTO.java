package com.PFBKreitekfy.Music.application.dto;

import java.io.Serializable;

public class RatingDTO implements Serializable {


    private Long userId;

    private Long songId;

    private Long quantity;


    public RatingDTO() {
    }

    public RatingDTO(Long songId, Long userId) {
        this.userId = userId;
        this.songId = songId;
    }

    public RatingDTO(Long songId, Long userId, Long quantity) {
        this.quantity = quantity;
        this.userId = userId;
        this.songId = songId;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
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
}
