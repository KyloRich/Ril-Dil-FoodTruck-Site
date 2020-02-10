package com.CALV.RilDilBBQ;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
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
@Table(name = "contact_us")
//This annotation works in conjunction with the enable JPA auditing annotation in the BookAppApplication class to allow listeners to determine when a new entity
//so the createdAt and updatedAt fields are filled in with a date and timestamp from the server.
@EntityListeners(AuditingEntityListener.class)
//This annotation is used to ignore the serialization or deserialization of items as JSON objects. In this case these two values as we do not want them from the 
//client because we want the time created and updated from the server. 
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)
public class ContactUs implements Serializable {
    // This annotation defines the primary key
    @Id
    // This annotation defines the primary key generation strategy. The options are
    // auto, identity, sequence, and table.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    private String first_name;
    
    @NotBlank
    private String last_name;
    
    @NotBlank
    private String email;
    
    @NotBlank
    private String street_address;
    
    @NotBlank
    private String street_address2;
    
    @NotBlank
    private String city;
    
    @NotBlank
    private String state;
    
    @NotNull
    private Long zip;
    
    @NotNull
    private Long number_of_guests;
    
    @NotBlank
    @Lob
    private String description_of_request;
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
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getStreet_address2() {
        return street_address2;
    }
    public void setStreet_address2(String street_address2) {
        this.street_address2 = street_address2;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getStreet_address() {
        return street_address;
    }
    public void setStreet_address(String street_address) {
        this.street_address = street_address;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public Long getZip() {
        return zip;
    }
    public void setZip(Long zip) {
        this.zip = zip;
    }
    public Long getNumber_of_guests() {
        return number_of_guests;
    }
    public void setNumber_of_guests(Long number_of_guests) {
        this.number_of_guests = number_of_guests;
    }
    public String getDescription_of_request() {
        return description_of_request;
    }
    public void setDescription_of_request(String description_of_request) {
        this.description_of_request = description_of_request;
    }
    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
    public Date getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
    
    //Getters and Setters (Kyle Addition **just in case you disagree)
    
}





