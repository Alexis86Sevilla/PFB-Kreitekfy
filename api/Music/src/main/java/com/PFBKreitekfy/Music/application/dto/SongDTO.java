package com.PFBKreitekfy.Music.application.dto;


import java.io.Serializable;
import java.util.Date;

public class SongDTO implements Serializable {

    private long id;

    private String name;

    private byte[] image;

    private Double duration;

    private Date dateLaunch;

    private Long albumId;

    private String albumName;

    private Long artistId;

    private String artistName;

    private Long styleId;

    private String styleName;

    private Long ratingId;

    private Long ratingQuantity;

    private Long viewsId;

    private Long viewsQuantity;

    public SongDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Double getDuration() {
        return duration;
    }

    public void setDuration(Double duration) {
        this.duration = duration;
    }

    public Date getDateLaunch() {
        return dateLaunch;
    }

    public void setDateLaunch(Date dateLaunch) {
        this.dateLaunch = dateLaunch;
    }

    public Long getAlbumId() {
        return albumId;
    }

    public void setAlbumId(Long albumId) {
        this.albumId = albumId;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public Long getArtistId() {
        return artistId;
    }

    public void setArtistId(Long artistId) {
        this.artistId = artistId;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public Long getStyleId() {
        return styleId;
    }

    public void setStyleId(Long styleId) {
        this.styleId = styleId;
    }

    public String getStyleName() {
        return styleName;
    }

    public void setStyleName(String styleName) {
        this.styleName = styleName;
    }

    public Long getRatingId() {
        return ratingId;
    }

    public void setRatingId(Long ratingId) {
        this.ratingId = ratingId;
    }

    public Long getRatingQuantity() {
        return ratingQuantity;
    }

    public void setRatingQuantity(Long ratingQuantity) {
        this.ratingQuantity = ratingQuantity;
    }

    public Long getViewsId() {
        return viewsId;
    }

    public void setViewsId(Long viewsId) {
        this.viewsId = viewsId;
    }

    public Long getViewsQuantity() {
        return viewsQuantity;
    }

    public void setViewsQuantity(Long viewsQuantity) {
        this.viewsQuantity = viewsQuantity;
    }
}