import React, { Component } from "react";
import pic1 from "./Images/1.jpg";
import pic2 from "./Images/2.jpg";
import pic3 from "./Images/3.jpg";
import pic4 from "./Images/4.jpg";
import pic5 from "./Images/5.jpg";
import pic6 from "./Images/6.jpg";

export default class MenuItems extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col mb-3">
            <div className="card h-100">
              <img src={pic1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-danger">House Burger</h5>
                <p className="card-text">
                  All beef patty grill to perfection with your favorite fixins'.
                </p>
              </div>
              <div className="card-footer">
                <strong>$8.00</strong>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100">
              <img src={pic2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-danger">Super Brat</h5>
                <p className="card-text">
                  A delicious Applewood Smoked brat ready to be dressed with
                  your favorite <strong>RIL DIL</strong> fixins'.
                </p>
              </div>
              <div className="card-footer">
                <strong>$7.50</strong>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100">
              <img src={pic3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-danger">Pulled Pork</h5>
                <p className="card-text">
                  Hand shredded, smoked porked pulled with the softest fingers
                  EVER! Topped with Sweet Baby Rays BBQ or the amazing!{" "}
                  <strong>RIL DIL SAUCE</strong>
                </p>
              </div>
              <div className="card-footer">
                <strong>$8.00</strong>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100">
              <img src={pic4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-danger">Could You Spare A Rib</h5>
                <p className="card-text">
                  See what we did there? NO? Well just enjoy the Mephis grill
                  rib and we'll leave the jokes alone. Showered with our special
                  mix of <strong>RIL DIL RUB</strong>
                </p>
              </div>
              <div className="card-footer">
                <strong>$8.00</strong>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <img src={pic5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-danger">Ril Dil Burger</h5>
                <p className="card-text">
                  The best burger you've never had! Taste it again for the first
                  time! Every bite is an experience. Hungry yet? 100% Angus Beef
                  grill BLISS with our <strong>RIL DIL SAUCE</strong>
                </p>
              </div>
              <div className="card-footer">
                <strong>$10.00</strong>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <img src={pic6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-danger">Image of Healthy</h5>
                <p className="card-text">
                  Want to fool your body into thinking you're still on your
                  diet? Add a lil' green to your sammich! This is not your
                  average turkey club.
                </p>
              </div>
              <div className="card-footer">
                <strong>$8.00</strong>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
