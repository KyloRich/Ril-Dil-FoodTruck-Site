import React from "react";
import Contact from "./Component/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import NoMatch from "./Component/NoMatch";
import Navbar2 from "./Component/Navbar2";
import Footer2 from "./Component/Footer2";
import ValidatedLoginForm from "./Component/ValidatedLoginForm";
import TabComponent from "./Component/TabComponent";

class App extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <Router>
          <Navbar2></Navbar2>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/menu" component={Menu} /> 
            <Route exact path="/contact" component={Contact} /> 
            <Route exact path="/login" component={ValidatedLoginForm} /> 
            <Route exact path="/admin" component={TabComponent} />
            <Route exact pathe="/404" component={NoMatch} />
          </Switch>
          <Footer2></Footer2>
        </Router>
      </div>
    );
  }
}
export default App;