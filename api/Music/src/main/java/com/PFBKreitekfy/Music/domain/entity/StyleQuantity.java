package com.PFBKreitekfy.Music.domain.entity;


public class StyleQuantity {
    private Long styleId;
    private Long quantity;

    public StyleQuantity(Long styleId, Long quantity) {
        this.styleId = styleId;
        this.quantity = quantity;
    }

    public StyleQuantity() {
    }

    public Long getStyleId() {
        return styleId;
    }

    public void setStyleId(Long styleId) {
        this.styleId = styleId;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
