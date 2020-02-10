import React from "react";
import "../App.css";

class Test2 extends React.Component {
  render() {
    return (
      <main role="main">
        <div className="bd-example">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./images/photo1.jpg"
                  className="d-block w-100"
                  alt="steaks"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/photo2.jpg"
                  className="d-block w-100"
                  alt="bratwursts"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/photo3.jpg"
                  className="d-block w-100"
                  alt="hotdogs"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/photo9.jpg"
                  className="d-block w-100"
                  alt="ribs"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/photo4.jpg"
                  className="d-block w-100"
                  alt="burger"
                ></img>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </main>
    );
  }
}
export default Test2;
