import React from "react";
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import truck from "./Images/truck.png";

class FoodMapAdmin extends React.Component {
  constructor() {
    super();
    this.updateLocation = this.updateLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDates = this.getDates.bind(this);
    this.dateClick = this.dateClick.bind(this);
    this.state = {
      id: 0,
      lat: 33.45171,
      lon: -111.926,
      address: "Connecting   Jan 03, 2020  ________________________________",
      date: "2020-01-03",
      dates: []
    };
  }
  componentDidMount() {
    this.getDates();
  }
  //get JSON data
  getDates = async () => {
    axios.get(`${URL.base}/locations/`).then(async res => { 
      let subset = await res.data.splice(0, 4);
      this.setState({
        dates: subset,
        date: subset[0].date,
        lat: subset[0].lat,
        lon: subset[0].lon,
        address: subset[0].address
      });
    });
  };
  dateClick = i => {
    this.setState({
      lat: this.state.dates[i].lat,
      lon: this.state.dates[i].lon,
      address: this.state.dates[i].address,
      id: i,
      date: this.state.dates[i].date
    });
  };
  updateHandler = () => {
    alert("Update Successful");
  };
  updateLocation = event => {
    event.preventDefault();
    let d = this.state.dates[this.state.id];
    d.date = document.getElementById("date").value;
    d.address = document.getElementById("address").value;
    d.lat = document.getElementById("latitude").value;
    d.lon = document.getElementById("longitude").value;
    this.setState({
      date: d.date,
      address: d.address,
      lat: d.lat,
      lon: d.lon
    });
    axios.put(`${URL.base}/locations/` + this.state.id, {
      date: d.date,
      address: d.address,
      lat: d.lat,
      lon: d.lon
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    let dates = (
      <div className="row text-white-50">
        {this.state.dates.map((item, i) => (
          <div
            key={i}
            className="nav-item nav-link active bg-dark text-white-50"
            id="nav-home-tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => this.dateClick(i)}
          >
            Location {(i + 1).toString()}: {item.date}
          </div>
        ))}
      </div>
    );
    return (
      <React.Fragment>
        <div>
          <div className="container text-white-50">
            <h2 className="my-4 text-white-50">
              Find out where we'll be next!
            </h2>
            <nav>
              <div
                className="nav nav-tabs bg-dark text-white-50"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link bg-dark text-white-50"
                  id="nav-profile-tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  {dates}
                </a>
              </div>
            </nav>
            <div className="tab-content"></div>
            <div
              className="row find-us bg-dark text-white-50"
              id="nav-tabContent"
            ></div>
            <form onSubmit={event => this.updateLocation(event)}>
              <button
                className="btn btn-danger text-dark"
                type="submit"
                onClick={this.updateHandler}
              >
                UPDATE
              </button>
              <div className="map-content col-lg-6 col-mdtab-content bg-dark text-white-50">
                <div
                  className="tab-pane"
                  id="nav-profile"
                  aria-labelledby="nav-profile-tab"
                >
                  <br></br>
                  <br></br>
                  <label htmlFor="date">Date</label>
                  <input
                    name="date"
                    onChange={this.handleChange}
                    type="text"
                    id="date"
                    value={this.state.date}
                  ></input>
                  <br></br>
                  <br></br>
                  <label htmlFor="address">Address Times and other Info</label>
                  <textarea
                    onChange={this.handleChange}
                    id="address"
                    maxLength="100"
                    cols="90"
                    rows="2"
                    name="address"
                    value={this.state.address}
                  ></textarea>
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    onChange={this.handleChange}
                    name="lat"
                    type="text"
                    id="latitude"
                    value={this.state.lat}
                  ></input>
                  <label htmlFor="longitude">Longitude</label>
                  <input
                    onChange={this.handleChange}
                    name="lon"
                    type="text"
                    id="longitude"
                    value={this.state.lon}
                  ></input>
                </div>
              </div>
              <div className="googleMap">
                <Map
                  google={this.props.google}
                  initialCenter={{ lat: this.state.lat, lng: this.state.lon }}
                  center={{ lat: this.state.lat, lng: this.state.lon }}
                  zoom={15}
                >
                  <Marker
                    position={{ lat: this.state.lat, lng: this.state.lon }}
                    icon={truck}
                  ></Marker>
                </Map>
              </div>
            </form>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="bg-dark text-white text-center mapContent"></td>
                <td className="bg-dark location-dates"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAX71n22iJEY3_OgH7s_RfIfkJW0rvMhmo"
})(FoodMapAdmin);