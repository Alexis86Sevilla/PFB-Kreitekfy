package com.PFBKreitekfy.Music.domain.persistance;

import com.PFBKreitekfy.Music.domain.entity.User;


import java.util.List;
import java.util.Optional;

public interface UserPersistance {

    List<User> getAllUsers();

    Optional<User> getUserById(Long userId);

    User saveUser(User user);
}
