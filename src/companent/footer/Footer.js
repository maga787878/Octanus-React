import React, { Component } from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className="flex-rw">
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">Turlar haqqında</h4></li>
    <li><a href='/service/citytour' className="generic-anchor footer-list-anchor" >Ölkə daxili turlar</a></li>
    <li><a href='/service/travelworld' className="generic-anchor footer-list-anchor" >Ölkə xarici turlar</a></li>
    <li><a href='/service/travelworld' className="generic-anchor footer-list-anchor" >Xüsusi turlar</a></li>
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">Transfer haqqında</h4></li>
    <li><a href='/service/transfer' className="generic-anchor footer-list-anchor">Vip transfer</a></li>
  </ul>
  <ul className="footer-list-top">
    <li id='help'>
      <h4 className="footer-list-header">Yardım lazımdır?</h4></li>
    <li><a href="tel:+994559190287" className="generic-anchor footer-list-anchor" > <PhoneIcon></PhoneIcon> <span>055-919-02-87</span></a></li>
    <li><a href="mailto:octanus.travel@gmail.com" className="generic-anchor footer-list-anchor" ><EmailIcon/>Octanus.travel@gmail.com </a></li>
    <li id='find-a-store' className="generic-anchor footer-list-anchor" ><p>Ünvan: Xetai prospekti 44a</p></li>
     </ul>
  <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">
      Bizim <span className="footer-social-small">ilə</span> əlaqə
      </span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div className="footer-bottom-wrapper">   
<i className="fa fa-copyright">
</i> © 2019-2020 <address className="footer-address" >Azerbaijan, Baku</address><span className="footer-bottom-rights"> - Məxfiçilik qorunur - </span>
    </div>
    <div className="footer-bottom-wrapper">
    <a href="http://mahammadaliyev.cf/" className="generic-anchor" rel="nofollow">Mahammad</a> | <a href="http://mahammadaliyev.cf/" className="generic-anchor" rel="nofollow">Aliyev</a>
      </div>
  </section>
</footer>
    );
  }
}
