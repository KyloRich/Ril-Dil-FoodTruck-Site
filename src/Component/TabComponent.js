import React, { Component } from "react";
import Tabs from "./Tabs";
import MenuAdmin from "./MenuAdmin";
import FoodMap1Admin from "./FoodMap1Admin";
import ContactUsReviewer from "./ContactUsReviewer";

class TabComponent extends Component {
  render() {
    return (
      <div className="bg-dark text-white-50">
        <h1>Admin Menu</h1>
        <Tabs className="bg-dark text-white-50">
          <div label="Map Admin">
            <FoodMap1Admin></FoodMap1Admin>
          </div>
          <div label="Menu Admin">
            <MenuAdmin></MenuAdmin>
          </div>
          <div label="Contact Us Admin">
            <ContactUsReviewer></ContactUsReviewer>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
