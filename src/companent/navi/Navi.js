import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";

const style = {
  link: {color:"#9bbfe6"}
}

export default class Navi extends Component {
  // state = {
  //   isOpen: false,
  // };

  // navbarMenu = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // };

  render() {
    return (
      <header className="Header">
      <nav className="navbar navbar-expand-lg navbar-light  justify-content-between container">
       <Link style={{color:"#9bbfe6",fontSize:"40px"}} to="/">Octanus travel</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarMenu}
          
        >
          <FiAlignRight/>
        </button>

        {/* {
          this.state.isOpen ? <ul className="navbar-nav ">
          <li className="nav-item active ">
            <Link style={{color:"#9bbfe6"}} className="nav-link" to="/home">
              Əsas səhifə
            </Link>
          </li>
          <li className="nav-item">
            
            <Link style={{color:"#9bbfe6"}} className="nav-link" to="/service">
              Xidmətlər
            </Link>
          </li>

          <li className="nav-item">
            <Link style={{color:"#9bbfe6"}} className="nav-link" to="/company">
              Şirkət haqqında
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{color:"#9bbfe6"}} className="nav-link" to="/about">
              Əlaqə
            </Link>
          </li>
        </ul> : null
        } */}
       <ul className="navbar-nav ">
          <li className="nav-item active ">
            <Link style={style.link} className="nav-link" to="/home">
              Əsas səhifə
            </Link>
          </li>
          <li className="nav-item">
            
            <Link style={style.link} className="nav-link" to="/service">
              Xidmətlər
            </Link>
          </li>

          <li className="nav-item">
            <Link style={style.link} className="nav-link" to="/company">
              Şirkət haqqında
            </Link>
          </li>
          <li className="nav-item">
            <Link style={style.link} className="nav-link" to="/about">
              Əlaqə
            </Link>
          </li>
        </ul>
         
      
      </nav>
      </header>
    );
  }
}
