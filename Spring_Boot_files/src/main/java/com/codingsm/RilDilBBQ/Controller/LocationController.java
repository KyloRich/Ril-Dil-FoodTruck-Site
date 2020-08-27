package com.codingsm.RilDilBBQ.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codingsm.RilDilBBQ.Location;
import com.codingsm.RilDilBBQ.LocationRepository;
import com.codingsm.RilDilBBQ.Exception.ResourceNotFoundException;

@RestController
public class LocationController {
	@Autowired
	LocationRepository locationRepository;
	// Get All Locations
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/locations")
	public List<Location> getAllLocations() {
		return locationRepository.findAll();
	}
	// Create a new Location
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/locations")
	public Location createLocation(@Valid @RequestBody Location location) {
		return locationRepository.save(location);
	}
	// Get a Single Location
	@GetMapping("/locations/{id}")
	public Location getLocationById(@PathVariable(value = "id") Integer locationId) {
		return locationRepository.findById(locationId)
				.orElseThrow(() -> new ResourceNotFoundException("Location", "id", locationId));
	}
	// Update a Location
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/locations/{id}")
	public Location updateLocation(@PathVariable(value = "id") Integer locationId,
			@Valid @RequestBody Location locationDetails) {
		Location location = locationRepository.findById(locationId)
				.orElseThrow(() -> new ResourceNotFoundException("Location", "id", locationId));
		location.setDate(locationDetails.getDate());
		location.setAddress(locationDetails.getAddress());
		location.setLat(locationDetails.getLat());
		location.setLon(locationDetails.getLon());
		Location updatedLocation = locationRepository.save(location);
		return updatedLocation;
	}
	// Delete a Location
	@DeleteMapping("/locations/{id}")
	public ResponseEntity<?> deleteLocation(@PathVariable(value = "id") Integer locationId) {
		Location location = locationRepository.findById(locationId)
				.orElseThrow(() -> new ResourceNotFoundException("Location", "id", locationId));
		locationRepository.delete(location);
		return ResponseEntity.ok().build();
	}
}