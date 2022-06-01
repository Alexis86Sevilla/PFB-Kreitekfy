package com.PFBKreitekfy.Music.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Objects;

@Entity
@Table(name = "styles")
public class Style {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "styleSequence")
    private Long id;

    @Column(length = 100, nullable = false)
    @Size(min = 3, max = 100)
    private String name;

    public Style() {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Style style = (Style) o;
        return Objects.equals(id, style.id) && Objects.equals(name, style.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
