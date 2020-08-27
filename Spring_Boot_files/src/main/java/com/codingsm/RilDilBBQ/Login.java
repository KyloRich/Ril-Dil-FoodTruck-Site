package com.codingsm.RilDilBBQ;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.sun.istack.NotNull;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;
//This annotation marks a plain old java object that can be persisted to the database. It is also the domain model. All domain models must be annotated with this
@SuppressWarnings("serial")
@Entity
//This annotation specifies the name of the table the database will be using for mapping
@Table(name = "login")
//This annotation works in conjunction with the enable JPA auditing annotation in the BookAppApplication class to allow listeners to determine when a new entity
//so the createdAt and updatedAt fields are filled in with a date and timestamp from the server.
@EntityListeners(AuditingEntityListener.class)
//This annotation is used to ignore the serialization or deserialization of items as JSON objects. In this case these two values as we do not want them from the 
//client because we want the time created and updated from the server. 
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)
public class Login implements Serializable {
    // This annotation defines the primary key
    @Id
    // This annotation defines the primary key generation strategy. The options are
    // auto, identity, sequence, and table.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    private String email;
    
    @NotBlank
    private String password;
    

    @Override
	public String toString() {
		return "ContactUs [id=" + id + ", email=" + email + ", password=" + password + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + "]";
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	// This annotation allows the programmer to define the properties of the column
    // in this case the field man not be null, and is not updatable.
    @Column(nullable = false, updatable = false)
    // This annotation works with Java classes date and calendar to create a
    // timestamp
    @Temporal(TemporalType.TIMESTAMP)
    // This annotation sets the date and time the object was created to a field in
    // the datebase.
    @CreatedDate
    private Date createdAt;
    // This column cannot be null
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    // This annotation creates a field for the last update to the row
    @LastModifiedDate
    private Date updatedAt;
   
    
    //Getters and Setters (Kyle Addition **just in case you disagree)
    
}





