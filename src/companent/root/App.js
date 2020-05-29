import React from "react";
import Navi from "../navi/Navi";
import Home from "../../path/Home"
import Footer from "../footer/Footer";
import { Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound"
import Service from "../../path/Service"
import CityTour from "../../path/CityTour"
import TravelWorldTour from '../../path/TravelWorld'
import "../../styles/index.css";

function App() {
  return (
    <div>
      <Navi />
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/home" component={Home} />
       <Route exact path="/service/citytour" component={CityTour} />
       <Route exact path="/service/travelworld" component={TravelWorldTour}/>
       <Route exact path="/service" component={Service}/>
       <Route component={NotFound}/>
     </Switch>
      <Footer />
     
    </div>
  );
}

export default App;
