package com.PFBKreitekfy.Music.domain.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "songSequence")
    private long id;

    @Column(length = 100, nullable = false)
    @Size(min = 3, max = 100)
    private String name;

    @Lob
    private byte[] image;

    @Column
    @Positive
    private Double duration;

    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+1")
    private Date dateLaunch;

    @Column
    @Positive
    private Double valoration;

    @Column
    @Positive
    private Long visualizations;

    @ManyToOne()
    @JoinColumn(name = "album_id", nullable = false)
    private Album album;

    @ManyToOne()
    @JoinColumn(name = "artist_id", nullable = false)
    private Artist artist;

    @ManyToOne()
    @JoinColumn(name = "style_id", nullable = false)
    private Style style;

    public Song() {
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

    public Double getValoration() {
        return valoration;
    }

    public void setValoration(Double valoration) {
        this.valoration = valoration;
    }

    public Long getVisualizations() {
        return visualizations;
    }

    public void setVisualizations(Long visualizations) {
        this.visualizations = visualizations;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Style getStyle() {
        return style;
    }

    public void setStyle(Style style) {
        this.style = style;
    }
}
