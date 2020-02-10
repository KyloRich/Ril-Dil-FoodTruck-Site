import React from "react";
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import truck from "./Images/truck.png";
class FoodMap extends React.Component {
  constructor() {
    super();
    this.getDates = this.getDates.bind(this);
    this.dateClick = this.dateClick.bind(this);
    this.state = {
      lat: 33.45171,
      long: -111.926,
      add: "Connecting   Jan 03, 2020  ________________________________",
      date: "2020-01-03",
      dates: []
    };
  }
  componentDidMount() {
    this.getDates();
  }
  //get JSON data
  getDates = () => {
    axios.get(`http://localhost:8080/locations/`).then(res => {
      let subset = res.data.splice(0, 4);
      this.setState({
        dates: subset,
        lat: subset[0].lat,
        long: subset[0].lon,
        add: subset[0].address
      });
    });
  };
  dateClick = i => {
    this.setState({
      lat: i.lat,
      long: i.lon,
      add: i.address
    });
  };
  render() {
    let dates = (
      <div className="row border-bottom border-white">
        {this.state.dates.map((item, i) => (
          <div
            key={i}
            className="nav-item nav-link bg-dark text-danger active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => this.dateClick(item)}
          >
            {item.date}
          </div>
        ))}
      </div>
    );
    return (
      <div>
        <div className="container">
          <h2 className="my-4 text-white-50">Find out where we'll be next!</h2>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="true"
              >
                {dates}
              </a>
            </div>
          </nav>
          <div className="tab-content"></div>
          <div className="row find-us" id="nav-tabContent">
            <div className="map-content col-lg-6 col-mdtab-content">
              <div
                className="tab-pane"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <h2 className="text-white-50">{this.state.add}</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md googleMap">
              <Map
                google={this.props.google}
                initialCenter={{ lat: this.state.lat, lng: this.state.long }}
                center={{ lat: this.state.lat, lng: this.state.long }}
                zoom={15}
              >
                <Marker
                  position={{ lat: this.state.lat, lng: this.state.long }}
                  icon={truck}
                ></Marker>
              </Map>
            </div>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td className="bg-dark text-white text-center mapContent"></td>
              <td className="bg-dark text-white location-dates"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAX71n22iJEY3_OgH7s_RfIfkJW0rvMhmo"
})(FoodMap);
