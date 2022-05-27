package com.PFBKreitekfy.Music.infraestructure.rest;

import com.PFBKreitekfy.Music.application.dto.RatingDTO;
import com.PFBKreitekfy.Music.application.dto.ViewsDTO;
import com.PFBKreitekfy.Music.application.service.ViewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ViewsRestController {

    private final ViewsService viewsService;

    @Autowired
    public ViewsRestController(ViewsService viewsService) {
        this.viewsService = viewsService;
    }

    @CrossOrigin
    @GetMapping(value = "/views/{viewId}")
    ResponseEntity<ViewsDTO> getViewById(@PathVariable Long viewId) {
        Optional<ViewsDTO> view = this.viewsService.getViewsById(viewId);

        if (view.isPresent()) {
            return new ResponseEntity<>(view.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/views", produces = "application/json", consumes = "application/json")
    ResponseEntity<ViewsDTO> insertView(@RequestBody ViewsDTO viewDTO) {
        ViewsDTO viewSaved = this.viewsService.saveViews(viewDTO);
        return new ResponseEntity<>(viewSaved, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(value = "/views/{viewId}")
    ResponseEntity<?> deleteViewById(@PathVariable Long viewId) {
        this.viewsService.deleteViews(viewId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
