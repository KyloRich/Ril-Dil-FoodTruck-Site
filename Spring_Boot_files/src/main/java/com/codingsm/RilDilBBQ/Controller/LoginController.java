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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codingsm.RilDilBBQ.Login;
import com.codingsm.RilDilBBQ.LoginRepository;
import com.codingsm.RilDilBBQ.Exception.ResourceNotFoundException;

@RestController
@RequestMapping("/api")
public class LoginController {
	@Autowired
	LoginRepository loginRepository;
	// Get All login
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/login")
	public List<Login> getAlllogin() {
		return loginRepository.findAll();
	}
	// Create a new login
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/login")
	public Login createlogin(@Valid @RequestBody Login login) {
		return loginRepository.save(login);
	}
	// Get a Single login
	@GetMapping("/login/{id}")
	public Login getloginById(@PathVariable(value = "id") Long loginId) {
		return loginRepository.findById(loginId)
				.orElseThrow(() -> new ResourceNotFoundException("login", "id", loginId));
	}
	// Update a login
	@PutMapping("/login/{id}")
	public Login updatelogin(@PathVariable(value = "id") Long loginId,
			@Valid @RequestBody Login loginDetails) {
		Login login = loginRepository.findById(loginId)
				.orElseThrow(() -> new ResourceNotFoundException("login", "id", loginId));
		login.setEmail(loginDetails.getEmail());
		login.setPassword(loginDetails.getPassword());
		Login updatedlogin = loginRepository.save(login);
		return updatedlogin;
	}
	// Delete a login
	@DeleteMapping("/login/{id}")
	public ResponseEntity<?> deletelogin(@PathVariable(value = "id") Long loginId) {
		Login login = loginRepository.findById(loginId)
				.orElseThrow(() -> new ResourceNotFoundException("login", "id", loginId));
		loginRepository.delete(login);
		return ResponseEntity.ok().build();
	}
}