package com.PFBKreitekfy.Music.application.service.impl;

import com.PFBKreitekfy.Music.application.dto.UserDTO;
import com.PFBKreitekfy.Music.application.mapper.UserMapper;
import com.PFBKreitekfy.Music.application.service.UserService;
import com.PFBKreitekfy.Music.domain.entity.User;
import com.PFBKreitekfy.Music.domain.persistence.UserPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserPersistence persistence;
    private final UserMapper mapper;

    @Autowired
    public UserServiceImpl(UserPersistence persistence, UserMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = this.persistence.getAllUsers();
        return this.mapper.toDto(users);
    }

    @Override
    public Optional<UserDTO> getUserById(Long userId) {
        return this.persistence.getUserById(userId).map(mapper::toDto);
    }

    @Override
    public UserDTO saveUser(UserDTO user) {
        User userSaved = this.persistence.saveUser(this.mapper.toEntity(user));
        return this.mapper.toDto(userSaved);
    }
}
