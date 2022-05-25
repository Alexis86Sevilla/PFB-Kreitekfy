package com.PFBKreitekfy.Music.application.dto;


import java.io.Serializable;
import java.util.Date;

public class SongDTO implements Serializable {

    private long id;

    private String name;

    private byte[] image;

    private Double duration;

    private Date dateLaunch;

    private Double valoration;

    private Long visualizations;
}
