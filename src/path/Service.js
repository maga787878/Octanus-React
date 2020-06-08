import React, { Component } from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import DaxiliTur from "../companent/images/daxili.jpg";
import Xarici from "../companent/images/olkexa.jpg";
import Transfer from "../companent/images/tranfer.jpg";
import Viza from "../companent/images/Viza.jpg";

export default class Service extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center",paddingTop: "30px" }}>Xidmətlərimiz</h2>
        <div className="row D">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <figure className="snip0056 n1">
              <figcaption>
                <h2>
                  Ölkə daxili <span>turlar</span>
                </h2>
                <p>
                  Məktəb turu, şəhər içi turu, yaxta turu və.s İstər Qrup
                  halında istərsədə öz qrupunuzu yaradaraq ölkəmizin istənilən
                  yerlərində istirahət edə bilərsiniz
                </p>
                <div className="icons">
                  <Link to="/">
                    <i className="ion-ios-home"></i>
                  </Link>
                  <a href="mailto:octanus.travel@gmail.com">
                    <i className="ion-ios-email"></i>
                  </a>
                  <a href="tel:+994559190287">
                    <i className="ion-ios-telephone"></i>
                  </a>
                </div>
              </figcaption>
              <img src={DaxiliTur} alt="sample8" />
              <div className="position">
                <Link to="/service/citytour">
                  <span className="position">Ətraflı</span>
                </Link>
              </div>
            </figure>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <figure className="snip0056 yellow n2">
              <figcaption>
                <h2>
                  Ölkə Xarici <span>turlar</span>
                </h2>
                <p>
                  Erkən rezervasiyalar,Xüsusi turlar,istənilən ölkələrə tur
                  paketlər və aviabiletlərin münasib qiymətə satışı həyata
                  keçirilir{" "}
                </p>
                <div className="icons">
                  <Link to="/">
                    <i className="ion-ios-home"></i>
                  </Link>
                  <a href="mailto:octanus.travel@gmail.com">
                    <i className="ion-ios-email"></i>
                  </a>
                  <a href="tel:+994559190287">
                    <i className="ion-ios-telephone"></i>
                  </a>
                </div>
              </figcaption>
              <img src={Xarici} alt="sample9" />
              <div className="position">
                <Link to="/service/travelworld">
                  <span className="position">Ətraflı</span>
                </Link>
              </div>
            </figure>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <figure className="snip0056 n3">
              <figcaption>
                <h2>
                  Vip<span>Transfer</span>
                </h2>
                <p>Hava limanı service və Şəhər içi Transfer</p>
                <div className="icons">
                  <Link to="/">
                    <i className="ion-ios-home"></i>
                  </Link>
                  <a href="mailto:octanus.travel@gmail.com">
                    <i className="ion-ios-email"></i>
                  </a>
                  <a href="tel:+994559190287">
                    <i className="ion-ios-telephone"></i>
                  </a>
                </div>
              </figcaption>
              <img src={Transfer} alt="sample8" />
              <div className="position">
                {" "}
                <Link to="/service/transfer">
                  <span className="position">Ətraflı</span>
                </Link>
              </div>
            </figure>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <figure className="snip0056 yellow n4">
              <figcaption>
                <h2>
                  Viza<span>dəstəyi</span>
                </h2>
                <p>Şengen viza, turistlik və iş vizası</p>
                <div className="icons">
                  <Link to="/">
                    <i className="ion-ios-home"></i>
                  </Link>
                  <a href="mailto:octanus.travel@gmail.com">
                    <i className="ion-ios-email"></i>
                  </a>
                  <a href="tel:+994559190287">
                    <i className="ion-ios-telephone"></i>
                  </a>
                </div>
              </figcaption>
              <img src={Viza} alt="sample9" />
              <div className="position">
                {" "}
                <Link to="contact">
                  <span className="position">Ətraflı</span>
                </Link>
              </div>
            </figure>
          </div>
        </div>
        <hr style={{ borderTop: "2px solid rgba(0,0,0,1)" }}></hr>
      </div>
    );
  }
}
