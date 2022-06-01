package com.PFBKreitekfy.Music.infraestructure.rest;

import com.PFBKreitekfy.Music.application.dto.ArtistDTO;
import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.application.service.ViewsService;
import com.PFBKreitekfy.Music.domain.entity.ViewsPK;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ViewsRestController {

    private final ViewsService viewsService;

    @Autowired
    public ViewsRestController(ViewsService viewsService) {
        this.viewsService = viewsService;
    }


    @CrossOrigin
    @GetMapping(value = "/views/{songId}/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<ViewsDTO> getViewById(@PathVariable Long songId, @PathVariable Long userId){
        ViewsPK viewsId = new ViewsPK(songId,userId);
        Optional<ViewsDTO> view = this.viewsService.getViewsById(viewsId);

        if (view.isPresent()) {
            return new ResponseEntity<>(view.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/views/{songId}/{userId}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<ViewsDTO> insertView(@PathVariable Long songId, @PathVariable Long userId) {
        ViewsDTO viewsDTO = new ViewsDTO(songId, userId);
        ViewsDTO viewSaved = this.viewsService.saveViews(viewsDTO);
        return new ResponseEntity<>(viewSaved, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(value = "/views/{viewId}")
    ResponseEntity<?> deleteViewById(@PathVariable ViewsPK viewId) {
        this.viewsService.deleteViews(viewId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @PatchMapping(value = "/views/{songId}/{userId}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<ViewsDTO> updateView(@PathVariable Long songId, @PathVariable Long userId) {
        ViewsDTO viewsDTO = new ViewsDTO(songId, userId);
        ViewsDTO viewUpdated = this.viewsService.saveViews(viewsDTO);
        return new ResponseEntity<>(viewUpdated, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/views", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<ViewsDTO>> getAllViews() {
        List<ViewsDTO> views = this.viewsService.getAllViews();
        return new ResponseEntity<>(views, HttpStatus.OK);
    }
}
