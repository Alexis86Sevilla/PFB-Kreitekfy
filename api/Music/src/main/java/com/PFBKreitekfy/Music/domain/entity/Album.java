package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Objects;

@Entity
@Table(name = "albums")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "albumSequence")
    private Long id;

    @Column(length = 100, nullable = false)
    @Size(min = 3, max = 100)
    private String name;

    @Column(length = 2000)
    private String description;

    public Album() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Album album = (Album) o;
        return Objects.equals(id, album.id) && Objects.equals(name, album.name) && Objects.equals(description, album.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }
}
