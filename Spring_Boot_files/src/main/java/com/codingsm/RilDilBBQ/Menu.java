package com.codingsm.RilDilBBQ;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import org.springframework.data.annotation.CreatedDate;
//import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
//import java.lang.Double;
//import java.util.Date;
import java.io.Serializable;

@Entity
@Table(name = "menu")
@EntityListeners(AuditingEntityListener.class)
//@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
//      allowGetters = true)
public class Menu implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long menu_id;

  @NotBlank
  private String menu_item;
  
  @NotNull
  private String price;

  @NotBlank
  private String summary;
  
  @NotBlank
  private String image;

public Long getMenu_id() {
	return menu_id;
}

public void setMenu_id(Long menu_id) {
	this.menu_id = menu_id;
}

public String getMenu_item() {
	return menu_item;
}

public void setMenu_item(String menu_item) {
	this.menu_item = menu_item;
}

public String getPrice() {
	return price;
}

public void setPrice(String price) {
	this.price = price;
}

public String getSummary() {
	return summary;
}

public void setSummary(String summary) {
	this.summary = summary;
}

public String getImage() {
	return image;
}

public void setImage(String image) {
	this.image = image;
}

@Override
public String toString() {
	return "Menu [menu_id=" + menu_id + ", menue_item=" + menu_item + ", price=" + price + ", summary=" + summary
			+ ", image=" + image + "]";
}

	

  // Getters and Setters ... (Omitted for brevity)
  
}