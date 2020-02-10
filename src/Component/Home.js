import React from "react";
import Test2 from "./Test2";
import FoodMap1 from "./FoodMap1";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Test2></Test2>
        <div className="d-block">
          <FoodMap1></FoodMap1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
