import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-top Footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 footer-col-3">
              <h5>Octanus Travel</h5>
              <p>Şirkətimiz sizi arzularınıza çatdıracaq<br></br> Elə indi əlaqə saxlayın</p>
            </div>
            
            <div className="col-lg-9 col-md-9 col-sm-9 col-xl-9 footer-col-9 Footerend" >
                <h3 >Əlaqə:</h3>
                <span>Mobil:</span>
            <a href="tel:+994559190287">  055-919-02-87</a>
            <div> 
                E-mail:  <a href="mailto:octanus.travel@gmail.com">Octanus.travel@gmail.com</a>
            </div>
            <div>
                <p>Ünvan: Xetai prospekti 44a</p>
            </div>
         
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
