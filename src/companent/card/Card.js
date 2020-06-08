import React, { Component } from "react";
import Antalya from "../images/antalya2.jpg";
import Marmaris from "../images/marmaris.jpg";
import Bodrumtatil from "../images/bodrumtatil.jpg";
import Tatil from "../images/tatil.jpg";
import Bodrum from "../images/bodrumcard2.jpg";
import Marmaris2 from "../images/marmaris2.jpg";
import "./Card.css"
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <hr style={{borderTop:"2px solid rgba(0,0,0,1)"}}></hr>
        <h1 style={{ textAlign: "center" ,textShadow:"1px 1px 6px #73706e" }}> Erkən rezervasiya </h1>
        <br></br>
        <br></br>
        <div className="row">
        <div className="text-center col-lg-4 col-md-6 col-sm-6 card-container" style={{ marginRight:"auto" }}>
            
            <figure className="snip0016">
	<img src={Antalya} alt="sample43"/>
	<figcaption>
		<h2>Antalya <span>Erkən</span> Rezervasİya</h2>
		<p>3*,4* və 5* hoteller cəmi 200$ başlayan qiymətlərlə
      ətraflı melumat üçün üstünə basın
    </p>
    <Link to="/service/travelworld"></Link>
	</figcaption>			
</figure>
          </div>
        <div className="text-center col-lg-4 col-md-6 col-sm-6 card-container" >
        <figure className="snip0016">
	<img src={Marmaris} alt="sample43"/>
	<figcaption>
		<h2>Marmaris <span>Erkən</span> Rezervasİya </h2>
		<p>3*,4* və 5* hoteller cəmi 400$ başlayan qiymətlərlə
      ətraflı melumat üçün üstünə basın</p>
    <Link to="/service/travelworld"></Link>
	</figcaption>			
</figure>
          </div>
          <div
            className="text-center col-lg-4 col-md-6 col-sm-6 card-container"
            style={{marginRight:"auto" }}
          >
            <figure className="snip0016">
	<img src={Bodrum} alt="sample43"/>
	<figcaption>
		<h2>Bodrum <span>Erkən</span> Rezervasİya </h2>
		<p>3*,4* və 5* hoteller cəmi 250$ başlayan qiymətlərlə
      ətraflı melumat üçün üstünə basın</p>
		<Link to="/service/travelworld"></Link>
	</figcaption>			
</figure>
          </div>
          <div
            className="text-center col-lg-4 col-md-6 col-sm-6 card-container"
           
          >
             <figure className="snip0016">
	<img src={Tatil} alt="sample43"/>
	<figcaption>
		<h2>Kuşadası <span>Erkən</span> Rezervasİya </h2>
		<p>3*,4* və 5* hoteller cəmi 280$ başlayan qiymətlərlə
      ətraflı melumat üçün üstünə basın</p>
    <Link to="/service/travelworld"></Link>
	</figcaption>			
</figure>
          </div>
          <div
            className=" text-center col-lg-4 col-md-6 col-sm-6 card-container"
            style={{ marginRight:"auto"}}
          >
            <figure className="snip0016">
	<img src={Bodrumtatil} alt="sample43"/>
	<figcaption>
		<h2>Alanya <span>Erkən</span> Rezervasİya </h2>
		<p>3*,4* və 5* hoteller cəmi 200$ başlayan qiymətlərlə
      ətraflı melumat üçün üstünə basın</p>
    <Link to="/service/travelworld"></Link>
	</figcaption>			
</figure>
          </div>
          <div
            className="text-center col-lg-4 col-md-6 col-sm-6  card-container"
            
          >
             <figure className="snip0016">
	<img src={Marmaris2} alt="sample43"/>
	<figcaption>
		<h2>Belek <span>Erkən</span> Rezervasİya </h2>
		<p>3*,4* və 5* hoteller cəmi 200$ başlayan qiymətlərlə
      ətraflı melumat üçün üstünə basın</p>
    <Link to="/service/travelworld"></Link>
	</figcaption>			
</figure>
          </div>

        </div>
      </div>
    );
  }
}
