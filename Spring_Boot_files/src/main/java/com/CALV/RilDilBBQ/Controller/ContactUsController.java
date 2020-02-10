package com.CALV.RilDilBBQ.Controller;

import com.CALV.RilDilBBQ.ContactUs;
import com.CALV.RilDilBBQ.ContactUsRepository;
import com.CALV.RilDilBBQ.Exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ContactUsController {
	@Autowired
	ContactUsRepository contactUsRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	// Get All contactUs
	@GetMapping("/contactus")
	public List<ContactUs> getAllContactUs() {
		return contactUsRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Create a new contactUs
	@PostMapping("/contactus")
	public ContactUs createContactUs(@Valid @RequestBody ContactUs contactUs) {
		return contactUsRepository.save(contactUs);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Get a Single contactUs
	@GetMapping("/contactus/{id}")
	public ContactUs getContactUsById(@PathVariable(value = "id") Long contactUsId) {
		return contactUsRepository.findById(contactUsId)
				.orElseThrow(() -> new ResourceNotFoundException("ContactUs", "id", contactUsId));
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Update a contactUs
	@PutMapping("/contactus/{id}")
	public ContactUs updateContactUs(@PathVariable(value = "id") Long contactUsId,
			@Valid @RequestBody ContactUs contactUsDetails) {
		ContactUs contactUs = contactUsRepository.findById(contactUsId)
				.orElseThrow(() -> new ResourceNotFoundException("ContactUs", "id", contactUsId));
		contactUs.setFirst_name(contactUsDetails.getFirst_name());
		contactUs.setLast_name(contactUsDetails.getLast_name());
		contactUs.setStreet_address(contactUsDetails.getStreet_address());
		contactUs.setStreet_address2(contactUsDetails.getStreet_address2());
		contactUs.setCity(contactUsDetails.getCity());
		contactUs.setState(contactUsDetails.getState());
		contactUs.setZip(contactUsDetails.getZip());
		contactUs.setNumber_of_guests(contactUsDetails.getNumber_of_guests());
		contactUs.setDescription_of_request(contactUsDetails.getDescription_of_request());
		ContactUs updatedContactUs = contactUsRepository.save(contactUs);
		return updatedContactUs;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Delete a ContactUs
	@DeleteMapping("/contactus/{id}")
	public ResponseEntity<?> deleteContactUs(@PathVariable(value = "id") Long contactUsId) {
		ContactUs contactUs = contactUsRepository.findById(contactUsId)
				.orElseThrow(() -> new ResourceNotFoundException("ContactUs", "id", contactUsId));
		contactUsRepository.delete(contactUs);
		return ResponseEntity.ok().build();
	}
}