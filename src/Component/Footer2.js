import React from "react";
import { Link } from "react-router-dom";

class Footer2 extends React.Component {
  render() {
    return (
      <footer className="bg-dark border-top border-white text-white-50 text-center p-4">
        <div className="row text-center">
          <div className="col-4">
            <strong>Accepted Payments</strong>
            <br></br>
            <span>
              <img
                src="Images/cashapp.png"
                alt="Cash App"
                className="paymentOptions"
              ></img>
            </span>
            <span>
              <img
                src="Images/zelle.png"
                alt="Zelle"
                className="paymentOptions"
              ></img>
            </span>
          </div>

          <div className="col-4 order-2">
            <Link className="navbar-brand" to="/">
              <img
                src="./Images/rildil.svg"
                alt="Ril Dil Barbecue logo"
                className="logo"
              ></img>
            </Link>
          </div>
          <div className="col-4 order-3">
            <strong>Contact Us</strong>
            <p className="mb-0 pb-0">
              3412 S. 97th Drive Tolleson, Arizona
              <br></br>
              602-555-7777
            </p>
            <span>
              <a
                href="https://www.facebook.com/Ril-Dil-BBQ-274720226319493/"
                className="socialicons mt-0 pt-o"
              >
                <i className="fab fa-facebook m-2 pt-0 text-danger"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/Ril-Dil-BBQ-274720226319493/"
                className="socialicons mt-0 pt-0"
              >
                <i className="fab fa-instagram m-2 pt-0 text-danger"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/Ril-Dil-BBQ-274720226319493/"
                className="socialicons mt-0 pt-0"
              >
                <i className="fab fa-twitter m-2 pt-0 text-danger"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer2;
