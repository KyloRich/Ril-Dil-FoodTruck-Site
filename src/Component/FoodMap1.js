import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import truck from "./Images/truck.png";
class FoodMap extends React.Component {
  constructor() {
    super();
    this.yourFunctionName = this.yourFunctionName.bind(this);
    this.dateClick = this.dateClick.bind(this);
    this.state = {
      lat: 0,
      long: 0,
      add: "",
      date: "",
      dates: []
    };
  }
  componentDidMount() {
    this.yourFunctionName();
  }
  //get JSON data
  yourFunctionName = async () => {
    const api_call = await fetch(`http://localhost:8080/locations/`);
    const data = await api_call.json();
    this.setState({
      lat: data[data.length - 1].lat,
      long: data[data.length - 1].lon,
      add: data[data.length - 1].address,
      date: data[data.length - 1].date,
      dates: data
    });
  };
  dateClick = (i, subset) => {
    this.setState({
      lat: subset[i].lat,
      long: subset[i].lon,
      add: subset[i].address,
      date: subset[i].date
    });
  };
  render() {
    let size = this.state.dates.length;
    let subset = this.state.dates.slice(size - 4, size);
    let dates = (
      <div>
        <ul
          style={{
            listStyleType: "none",
            height: "200px",
            overflow: "hidden",
            margin: "0px 0",
            padding: "0px 0"
          }}
        >
          {subset.map((item, i) => (
            <li key={i}>
              <button
                class="btn btn-danger"
                // class="btn btn-link  text-white-50"
                style={{ margin: "5px 5px", padding: "3px 3px" }}
                onClick={() => this.dateClick(i, subset)}
              >
                {item.date}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div
        style={{
          borderWidth: " 20px",
          position: "relative",
          overflow: "hidden",
          height: "200px"
        }}
      >
        <table>
          <td
            className="bg-dark text-white text-center border border-bottom border-white"
            style={{ width: "40%" }}
          >
            <h2>{this.state.add}</h2>
          </td>
          <td
            className="bg-dark text-white border border-white"
            style={{ width: "10%", zIndex: "1" }}
          >
            {dates}
          </td>
          <td>
            <Map
              style={{ width: "50%" }}
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
          </td>
        </table>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAX71n22iJEY3_OgH7s_RfIfkJW0rvMhmo"
})(FoodMap);
