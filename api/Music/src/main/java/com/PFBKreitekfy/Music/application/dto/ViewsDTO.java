package com.PFBKreitekfy.Music.application.dto;

import java.io.Serializable;

public class ViewsDTO implements Serializable {

    private Long quantity;

    private Long userId;

    private Long songId;

    public ViewsDTO() {
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
