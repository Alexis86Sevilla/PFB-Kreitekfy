package com.PFBKreitekfy.Music.application.dto;


import java.io.Serializable;

public class UserDTO implements Serializable {

    private Long id;

    private String name;

    private Boolean isAdmin;

    public UserDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }
}
