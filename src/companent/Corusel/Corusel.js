import React, { Component } from "react";
import "./Corusel.scss"


export default class Corusel extends Component {
  constructor(props) {
      super(props);
      this.state = {
          activeID: 0,
          wrapperStyle: {
              backgroundImage: `url('${this.props.data[0].img}')`
          },
          panelStyle: {
              background: this.props.data[0].colour
          },
          buttonHover: false,
          buttonStyle: {
              color: '#ffffff'
          }
      };
  }
  _changeActive(id) {
      this.setState({
          activeID: id,
          wrapperStyle: {
              backgroundImage: `url(${this.props.data[id].img})`
          },
          panelStyle: {
              backgroundColor: this.props.data[id].colour
          }
      });
  }
  _buttonColour() {
      if(!this.state.buttonHover){
          this.setState({
              buttonHover: true,
              buttonStyle: {
                  color: this.props.data[this.state.activeID].colour
              }
          });
      } else {
          this.setState({
              buttonHover: false,
              buttonStyle: {
                  color: '#ffffff'
              }
          });
      }
  }
  render() {
      return (
          <section className="wrapper" style={this.state.wrapperStyle}>
              <Selectors 
                  data={this.props.data}
                  activeID={this.state.activeID}
                  _changeActive={this._changeActive.bind(this)}
              />
              <Panel 
                  data={this.props.data[this.state.activeID]}
                  panelStyle={this.state.panelStyle}
                  buttonStyle={this.state.buttonStyle}
                  _buttonColour={this._buttonColour.bind(this)}
              />
          </section>
      );
  }
}
class Panel extends React.Component {
  render() {
      return (
          <aside className="panel" style={this.props.panelStyle}>
              <h2 className="panel-header">{this.props.data.header}</h2>
              <p className="panel-info">{this.props.data.body}</p>
              <a href="/service" className="panel-button" 
                  style={this.props.buttonStyle}
                  onMouseEnter={this.props._buttonColour}
                  onMouseLeave={this.props._buttonColour}>
                  Ətraflı
              </a>
          </aside>
      );
  }
}
class Selectors extends React.Component {
  _handleClick(e) {
      if (this.props.id !== this.props.activeID) {
          this.props._changeActive(this.props.id);
      } else {
          return;
      }
  }
  render() {
      return (
          <div className="selectors">
              {this.props.data.map((item) => 
                  <Selector 
                      key={item.id}
                      id={item.id}
                      _handleClick={this._handleClick}
                      _changeActive={this.props._changeActive}
                      activeID={this.props.activeID}
                  />
              )}
          </div>
      );
  }
}
class Selector extends React.Component {
  render() {
      let componentClass = 'selector';
      if (this.props.activeID === this.props.id) {
          componentClass = 'selector active';
      }
      return (
          <div className={componentClass} onClick={this.props._handleClick.bind(this)}></div>
      );
  }
}




















// export default class Corusel extends Component {
//   render() {
//     return (
//       <div>
//         <div
//           id="carouselExampleIndicators"
//           className="carousel slide Corusel"
//           data-ride="carousel"
//         >
//           <ol className="carousel-indicators">
//             <li
//               data-target="#carouselExampleIndicators"
//               data-slide-to="0"
//               className="active"
              
//             ></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//           </ol>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={Antalya} className="d-block w-100" alt="..." style={{height: "470px"}}/>
//               <div className="carousel-caption d-none d-md-block" style={{background:"rgba(72, 62, 51, 0.6)",borderRadius:"30% 30% 60% 70%"}}> 
//               <h4 style={{fontSize: "8.5rem" , color:"#22252a"}}><span style={{textShadow: "1px 1px 6px #73706e"}}></span></h4>
//               <p style={{color:"#22252a",textShadow: "1px 1px 6px #73706e",fontSize:"25px"}}> </p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img src={Bali} className="d-block w-100" alt="..."style={{height: "470px"}} />
//               <div className="carousel-caption d-none d-md-block" style={{background:"rgba(72, 62, 51, 0.6)",borderRadius:"30% 30% 60% 70%"}}> 
//               <h4 style={{fontSize: "8.5rem",color:"#22252a"}}><span style={{textShadow: "1px 1px 6px #73706e"}}></span></h4>
//               <p style={{color:"#22252a",textShadow: "1px 1px 6px #73706e",fontSize:"25px"}}></p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img src={Antalya2} className="d-block w-100" alt="..." style={{height: "470px"}}/>
//               <div className="carousel-caption d-none d-md-block" style={{background:"rgba(72, 62, 51, 0.6)",borderRadius:"30% 30% 60% 70%"}} > 
//               <h4 style={{fontSize: "8.5rem",color:"#22252a"}}><span style={{textShadow: "1px 1px 6px #73706e"}}>Erkən rezervasiya</span></h4>
//               <p style={{color:"#22252a",textShadow: "1px 1px 6px #73706e",fontSize:"25px"}} >Tələsin 35% erkən rezervasiya endirimlərdən yararlanın</p>
//               </div>
//             </div>
//           </div>
//           <a
//             className="carousel-control-prev"
//             href="#carouselExampleIndicators"
//             role="button"
//             data-slide="prev"
//           >
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//           </a>
//           <a
//             className="carousel-control-next"
//             href="#carouselExampleIndicators"
//             role="button"
//             data-slide="next"
//           >
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//           </a>
//         </div>
//       </div>
//     );
//   }
// }
