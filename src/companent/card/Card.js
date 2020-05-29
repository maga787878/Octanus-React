import React, { Component } from "react";
import Antalya from "../images/antalya2.jpg";
import Marmaris from "../images/marmaris.jpg";
import Bodrumtatil from "../images/bodrumtatil.jpg";
import Tatil from "../images/tatil.jpg";
import Bodrum from "../images/bodrumcard2.jpg";
import Marmaris2 from "../images/marmaris2.jpg";

import { Link } from "react-router-dom";
const style= {
  link:{ backgroundColor:"#531324d4",color:"#9bbfe6"},
  p:{fontSize:"20px",color:"red"},
  img:{height:"220px",borderTopRightRadius:"10rem"}
}

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <hr style={{borderTop:"2px solid rgba(0,0,0,1)"}}></hr>
        <h1 style={{ textAlign: "center" ,textShadow:"1px 1px 6px #73706e" }}> Erkən rezervasiya </h1>
        <br></br>
        <br></br>
        <div className="row">
        <div className="text-center col-lg-4 col-md-6 col-sm-6 m-b30 card-container Card" style={{ marginRight:"auto" }}>
            <img src={Antalya} className="card-img-top" alt="..." style={style.img} />
            <div className="card-body">
              <h3>Antalya</h3>
              <p className="card-text">
               6 gecə 7 gün cəmi <span style={style.p}>300$ </span> başlayan qiymətlərlə
              </p>
              <Link to="/service/travelworld" className="btn" style={style.link}>
              Ətraflı
              </Link>
            </div>
          </div>
        <div className="text-center col-lg-4 col-md-6 col-sm-6 m-b30 card-container Card" >
            <img src={Marmaris} className="card-img-top" alt="..."  style={style.img}/>
            <div className="card-body">
            <h3>Marmaris</h3>
              <p className="card-text">
              6 gecə 7 gün cəmi <span style={style.p}>400$ </span> başlayan qiymətlərlə
              </p>
              <Link to="/service/travelworld" className="btn " style={style.link}>
              Ətraflı
              </Link>
            </div>
          </div>
          <div
            className="text-center col-lg-4 col-md-6 col-sm-6 m-b30 card-container Card"
            style={{ width: "18rem",marginRight:"auto" }}
          >
            <img src={Bodrum} className="card-img-top" alt="..." style={style.img} />
            <div className="card-body">
            <h3>Bodrum</h3>
              <p className="card-text">
              6 gecə 7 gün cəmi <span style={style.p}>250$ </span> başlayan qiymətlərlə
              </p>
              <Link to="/service/travelworld" className="btn " style={style.link}>
              Ətraflı
              </Link>
            </div>
          </div>
          <div
            className="text-center col-lg-4 col-md-6 col-sm-6 m-b30 card-container Card"
            style={{ width: "18rem" }}
          >
            <img src={Tatil} className="card-img-top" alt="..." style={style.img} />
            <div className="card-body">
            <h3>Kuşadası</h3>
              <p className="card-text">
              6 gecə 7 gün cəmi <span style={style.p}>280$ </span> başlayan qiymətlərlə
              </p>
              <Link to="/service/travelworld" className="btn " style={style.link}>
              Ətraflı
              </Link>
            </div>
          </div>
          <div
            className=" text-center col-lg-4 col-md-6 col-sm-6 m-b30 card-container Card"
            style={{ width: "18rem" ,marginRight:"auto"}}
          >
            <img src={Bodrumtatil} className="card-img-top" alt="..." style={style.img} />
            <div className="card-body">
            <h3>Alanya</h3>
              <p className="card-text">
              6 gecə 7 gün cəmi <span style={style.p}>200$ </span> başlayan qiymətlərlə
              </p>
              <Link to="/service/travelworld" className="btn " style={style.link}>
              Ətraflı
              </Link>
            </div>
          </div>
          <div
            className="text-center col-lg-4 col-md-6 col-sm-6 m-b30 card-container Card"
            style={{ width: "18rem" }}
          >
            <img src={Marmaris2} className="card-img-top" alt="..." style={style.img} />
            <div className="card-body">
            <h3>Belek</h3>
              <p className="card-text">
              6 gecə 7 gün cəmi <span style={style.p}>200$ </span> başlayan qiymətlərlə
              </p>
              <Link to="/service/travelworld" className="btn " style={style.link}>
               Ətraflı
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
