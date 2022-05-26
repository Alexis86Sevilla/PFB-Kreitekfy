package com.PFBKreitekfy.Music.infraestructure.rest;

<<<<<<< HEAD
=======

>>>>>>> 3ae876b7bc60de8299ef360e51609fccc5391e30
import com.PFBKreitekfy.Music.application.dto.UserDTO;
import com.PFBKreitekfy.Music.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

<<<<<<< HEAD
public class UserRestController {

=======
@RestController
public class UserRestController {
>>>>>>> 3ae876b7bc60de8299ef360e51609fccc5391e30
    private final UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping(value = "/users", produces = "application/json", consumes = "application/json")
    ResponseEntity<UserDTO> insertUser(@RequestBody UserDTO userDTO) {
        UserDTO userSaved = this.userService.saveUser(userDTO);
        return new ResponseEntity<>(userSaved, HttpStatus.CREATED);
    }
<<<<<<< HEAD

=======
>>>>>>> 3ae876b7bc60de8299ef360e51609fccc5391e30
    @CrossOrigin
    @GetMapping(value = "/users", produces = "application/json")
    ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> user = this.userService.getAllUsers();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
<<<<<<< HEAD

=======
>>>>>>> 3ae876b7bc60de8299ef360e51609fccc5391e30
    @CrossOrigin
    @GetMapping(value = "/users/{userId}")
    ResponseEntity<UserDTO> getUserById(@PathVariable Long userId) {
        Optional<UserDTO> user = this.userService.getUserById(userId);

        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
