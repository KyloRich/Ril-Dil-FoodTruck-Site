package com.CALV.RilDilBBQ;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "locations")
@EntityListeners(AuditingEntityListener.class)
public class Location implements Serializable
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	String date;
	String Address;
	Double Lon;
	Double Lat;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public Double getLon() {
		return Lon;
	}
	public void setLon(Double lon) {
		Lon = lon;
	}
	public Double getLat() {
		return Lat;
	}
	public void setLat(Double lat) {
		Lat = lat;
	}
}