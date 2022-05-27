package com.PFBKreitekfy.Music.application.mapper;

import com.PFBKreitekfy.Music.application.dto.UserDTO;
import com.PFBKreitekfy.Music.domain.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper extends EntityMapper<UserDTO, User> {

    default User fromId(Long id) {

        if (id == null) return null;

        User user = new User();
        user.setId(id);
        return user;
    }
}
