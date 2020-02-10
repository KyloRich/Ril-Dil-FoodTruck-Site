import React from "react";
import axios from "axios";
import "../App.css";
export default class Contact extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    street_address: "",
    street_address2: "",
    city: "",
    zip: "",
    choosestate: "",
    number_of_guests: "",
    description_of_request: ""
  };

  handleAlert = () => {
    alert(
      "You're informtaion has been submitted. Please allow up to 24 hours for response"
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    console.log(event.target.elements[2].value);
    console.log(event.target.elements[3].value);
    console.log(event.target.elements[4].value);
    console.log(event.target.elements[5].value);
    console.log(event.target.elements[6].value);
    console.log(event.target.elements[7].value);
    console.log(event.target.elements[8].value);
    console.log(event.target.elements[9].value);
    axios.post(`http://localhost:8080/api/contactus`, {
      first_name: event.target.elements[0].value,
      last_name: event.target.elements[1].value,
      email: event.target.elements[2].value,
      street_address: event.target.elements[3].value,
      street_address2: event.target.elements[4].value,
      city: event.target.elements[5].value,
      state: event.target.elements[6].value,
      zip: event.target.elements[7].value,
      number_of_guests: event.target.elements[8].value,
      description_of_request: event.target.elements[9].value
    });
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            {/* First Name Form */}
            <div className="form-group text-white-50">
              <label htmlFor="exampleInputFirstName">First Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleInputFirstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>

            {/* Last Name Form */}
            <div className="form-group text-white-50">
              <label htmlFor="exampleInputLastName">Last Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleInputLastName"
                placeholder="Last Name"
              />
            </div>
            {/* Email Form */}
            <div className="form-group text-white-50">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="You@example.com"
              />
            </div>
            {/* Address Form */}
            <div className="form-group text-white-50">
              <label htmlFor="exampleInputstreet_address">Address</label>
              <input
                type="address"
                className="form-control"
                id="InputAddress"
                placeholder="123 Market St"
              />
            </div>
            {/* Address 2 (optional) Form */}
            <div className="form-group text-white-50">
              <label htmlFor="exampleInputstreet_address">
                Address 2 (optional)
              </label>
              <input
                type="address"
                className="form-control"
                id="InputAddress2"
                placeholder="Apartment or suite"
              />
            </div>
            {/* City Form*/}
            <div className="form-row text-white-50">
              <div className="form-group col-md-4">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="City"
                />
              </div>
              {/* State Selection Form */}
              <div className="form-group col-md-4 text-white-50">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option defaultValue>Choose State</option>
                  <option value="">N/A</option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              {/* Zip Code Form */}
              <div className="form-group col-md-2 text-white-50">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="Zip code"
                />
              </div>
              {/* Number of guests Form */}
              <div className="form-group col-md-2 text-white-50">
                <label htmlFor="inputnumber_of_guests">Guests</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputnumber_of_guests"
                  placeholder="# of Guests"
                />
              </div>
            </div>
            {/* Additional Comments Form */}
            <div className="form-group text-white-50">
              <label htmlFor="inputdescription_of_request">
                Description of Request
              </label>
              <textarea
                className="form-control"
                id="inputdescription_of_request"
                rows="3"
              ></textarea>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="text-center">
              <button
                type="submit"
                className="btn-lg btn-success"
                onClick={this.handleAlert}
              >
                Submit!
              </button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
