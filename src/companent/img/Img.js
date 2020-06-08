import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bali2 from "../images/bali2.jpeg";

export default class Img extends Component {
  render() {
    return (

      
      <div className="card bg-dark text-white" style={{borderRadius:"50%",marginTop:"20px"}}>
        <img src={Bali2} className="card-img" alt="..." style={{height:"1000px" ,borderRadius:"230px"}}/>
        <div className="card-img-overlay">
          <h5 className="card-title" style={{textAlign:"center",color:"#22252a",textShadow: "1px 1px 6px #73706e",fontSize:"100px"}}>Bali turu</h5>
          <p className="card-text" style={{background:"rgba(124, 199, 243, 0.6)",borderRadius:"10px 200px / 100px",padding:"30px"}}>
            15-günlük bali tur paket alana 1 gün bizdən sizə hədiyyə<br></br>
            Doya Doya istirahət edin<br></br> <Link to="/service/travelworld"> Ətraflı</Link>
          </p>
    
         
        </div>
      </div>
    );
  }
}
