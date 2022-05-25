package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.UserDTO;
import com.PFBKreitekfy.Music.domain.entity.Artist;
import com.PFBKreitekfy.Music.domain.entity.User;

public interface UserMapper extends EntityMapper<UserDTO, User> {

    default User fromId(Long id) {

        if (id == null) return null;

        User user = new User();
        user.setId(id);
        return user;
    }
}
