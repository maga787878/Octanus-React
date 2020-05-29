import React, { Component } from "react";
import { Link } from "react-router-dom";
import DaxiliTur from "../companent/images/daxili.jpg";
import Xarici from "../companent/images/olkexa.jpg";
import Transfer from "../companent/images/tranfer.jpg";
import Viza from "../companent/images/Viza.jpg";

const style = {
  img: {width:"100%",height:"100%"},
  p:{background:"rgba(239, 217, 194, 0.6)",borderRadius:"6px"},
  card:{marginBottom:"20px", height:"360px"}
}

export default class Service extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Xidmətlərimiz</h2>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="card bg-dark" style={style.card}>
              <img
                src={DaxiliTur}
                className="Daxili"
                alt="..."
                style={style.img}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Ölkə daxili turlar
                </h5>
                <p
                  className="card-text"
                  style={style.p}
                >
                  Məktəb turu, şəhər içi turu, yaxta turu və.s<br></br>
                  İstər Qrup halında istərsədə öz qrupunuzu yaradaraq ölkəmizin
                  istənilən yerlərində istirahət edə bilərsiniz
                </p>
                <Link to="/service/citytour">
                  <span className="badge badge-info">Ətraflı</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="card bg-dark" style={style.card}>
              <img
                src={Xarici}
                className="Daxili"
                alt="..."
                style={style.img}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Ölkə xarici turlar
                </h5>
                <p
                  className="card-text"
                  style={style.p}
                >
                  Bal ayı, Erkən rezervasiyalar, Qrup turlar, Fərdi turlar və.s <br></br>
                  İstənilən ölkələrə tur paketlərin hazırlanması 
                </p>
                <Link to="/service/travelworld">
                  <span className="badge badge-info">Ətraflı</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="card bg-dark" style={style.card}>
              <img
                src={Transfer}
                className="Daxili"
                alt="..."
                style={style.img}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                Vip Transfer
                </h5>
                <p
                  className="card-text"
                  style={style.p}
                >
                 Hava limanı service və Şəhər içi Transfer
                </p>
                <Link to="">
                  <span className="badge badge-info">Ətraflı</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="card bg-dark" style={style.card}>
              <img
                src={Viza}
                className="Daxili"
                alt="..."
                style={style.img}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Viza dəstəyi
                </h5>
                <p
                  className="card-text"
                  style={style.p}
                >
                  Şengen viza, turistlik və iş vizası
                </p>
                <Link to="">
                  <span className="badge badge-info">Ətraflı</span>
                </Link>
              </div>
            </div>
          </div>
          </div>
        <hr style={{borderTop:"2px solid rgba(0,0,0,1)"}}></hr>
      </div>
    );
  }
}
