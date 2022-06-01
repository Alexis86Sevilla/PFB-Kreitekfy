package com.PFBKreitekfy.Music.application.dto;


import com.PFBKreitekfy.Music.domain.entity.Rating;
import com.PFBKreitekfy.Music.domain.entity.Views;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SongDTO songDTO = (SongDTO) o;
        return id == songDTO.id && name.equals(songDTO.name) && Arrays.equals(image, songDTO.image) && Objects.equals(duration, songDTO.duration) && Objects.equals(dateLaunch, songDTO.dateLaunch) && albumId.equals(songDTO.albumId) && Objects.equals(albumName, songDTO.albumName) && artistId.equals(songDTO.artistId) && Objects.equals(artistName, songDTO.artistName) && styleId.equals(songDTO.styleId) && Objects.equals(styleName, songDTO.styleName);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, name, duration, dateLaunch, albumId, albumName, artistId, artistName, styleId, styleName);
        result = 31 * result + Arrays.hashCode(image);
        return result;
    }
}
