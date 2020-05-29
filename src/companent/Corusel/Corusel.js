import React, { Component } from "react";
import Antalya from "../images/antalya.jpg"
import Antalya2 from "../images/antalya2.jpg"
import Bali from "../images/bali.jpg"

export default class Corusel extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide Corusel"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
              
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Antalya} className="d-block w-100" alt="..." style={{height: "470px"}}/>
              <div className="carousel-caption d-none d-md-block" style={{background:"rgba(72, 62, 51, 0.6)",borderRadius:"30% 30% 60% 70%"}}> 
              <h4 style={{fontSize: "8.5rem" , color:"#22252a"}}><span style={{textShadow: "1px 1px 6px #73706e"}}>Antalya</span></h4>
              <p style={{color:"#22252a",textShadow: "1px 1px 6px #73706e",fontSize:"25px"}}>Hələdə tətilə gediləcək yer axtarırsız<br></br>200$-dan başlayan qiymətlə </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Bali} className="d-block w-100" alt="..."style={{height: "470px"}} />
              <div className="carousel-caption d-none d-md-block" style={{background:"rgba(72, 62, 51, 0.6)",borderRadius:"30% 30% 60% 70%"}}> 
              <h4 style={{fontSize: "8.5rem",color:"#22252a"}}><span style={{textShadow: "1px 1px 6px #73706e"}}>Bali</span></h4>
              <p style={{color:"#22252a",textShadow: "1px 1px 6px #73706e",fontSize:"25px"}}>Balini bizimlə kəşf edin<br></br>1000$-dan başlayan qiymətlə</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Antalya2} className="d-block w-100" alt="..." style={{height: "470px"}}/>
              <div className="carousel-caption d-none d-md-block" style={{background:"rgba(72, 62, 51, 0.6)",borderRadius:"30% 30% 60% 70%"}} > 
              <h4 style={{fontSize: "8.5rem",color:"#22252a"}}><span style={{textShadow: "1px 1px 6px #73706e"}}>Erkən rezervasiya</span></h4>
              <p style={{color:"#22252a",textShadow: "1px 1px 6px #73706e",fontSize:"25px"}} >Tələsin 35% erkən rezervasiya endirimlərdən yararlanın</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
