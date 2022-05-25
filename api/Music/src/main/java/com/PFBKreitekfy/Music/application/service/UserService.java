package com.PFBKreitekfy.Music.application.service;



import com.PFBKreitekfy.Music.application.dto.UserDTO;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserDTO> getAllUsers();

    Optional<UserDTO> getUserById(Long userId);

    UserDTO saveUser(UserDTO user);
}
