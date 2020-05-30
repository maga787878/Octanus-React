import React, { Component } from "react";
import { connect } from "react-redux";
import Quba from "../companent/images/quba.jpeg"
import Nabran from "../companent/images/nabran.jpg"
import Naftalan from "../companent/images/naftalan.jpg"
import Qax from "../companent/images/qax.jpg"
import Qebele from "../companent/images/qebele.jpg"
import Ismayilli from "../companent/images/ismayilli.jpg"
import Goygol from "../companent/images/goygol.jpg"



const style = {
    cardText:{color:"red"},
    
    body:{background:"rgba(72, 62, 51, 0.3)",borderRadius:"6px",borderBottom:"solid"}
}

class CityTour extends Component {
  render() {
    return (
      <div>
        <h2 style={{textAlign:"center",marginTop:"20px"}}>Ölkə daxili Turlar</h2>    
        <div className="container row ">
            <div className="col-7 city">
                  <img src={Quba} className="card-img" alt="..." style={{borderRadius:"60px",marginTop:"20px",height:"400px"}}/>
                  <img src={Goygol} className="card-img" alt="..." style={{marginTop:"75px",borderRadius:"60px",height:"400px"}}/>
                  <img src={Naftalan} className="card-img" alt="..." style={{borderRadius:"60px",marginTop:"40px"}}/>
                  <img src={Ismayilli} className="card-img" alt="..." style={{marginTop:"370px",borderRadius:"60px"}}/>
                  <img src={Nabran} className="card-img" alt="..." style={{height:"270px",marginTop:"35px",borderRadius:"60px"}}/>
                  <img src={Qebele} className="card-img" alt="..." style={{height:"270px",marginTop:"35px",borderRadius:"60px"}}/>
                  <img src={Qax} className="card-img" alt="..." style={{borderRadius:"60px",marginTop:"35px"}}/>
                     </div>
          <div className="col-5" >
            {this.props.citytour.cityTourCategory.map(category=>(
            <div key={category.id}>
           <div className="card-body " style={{padding:"20px"}}>
             <h5 className="card-title">{category.categoryName}</h5>
            <p className="card-text city1" style={style.body} ><span style={style.cardText}>Say:</span> {category.person}</p>
            <p className="card-text city2" style={style.body}><span style={style.cardText}>Qiymət:</span> {category.price}</p>
            <p className="card-text city3" style={style.body}><span style={style.cardText}>Tura daxildir:</span> {category.service}</p>
            <p className="card-text city4" style={style.body}><span style={style.cardText}>Tur haqqında:</span> {category.information}</p>
                 </div>
                </div>
            ))}
                </div>
            </div>
        <div style={{background:"rgba(72, 62, 51, 0.3)",borderRadius:"6px",marginLeft:"30%",marginRight:"30%",textAlign:"center",marginTop:"30px"}}>
                 <h3>Başqa turlar və yenilikləri öyrənmək üçün</h3>
                 <p>Bizimlə əlaqə saxlayın siz hələdə düşünürsüz?</p>
                 </div>
        <hr style={{borderTop:"2px solid rgba(0,0,0,1)"}}></hr>
      </div>
    );
  }
}

function mapStoreToProps(state){
  return{
    citytour:state.cityCategoryReducer,
  };
}

export default connect(mapStoreToProps)(CityTour);
