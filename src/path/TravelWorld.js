import React, { Component } from 'react'
import { connect } from 'react-redux'
import Antalya from "../companent/images/antalya2.jpg"
import Alanya from "../companent/images/alanyaa.jpg"
import Belek from "../companent/images/belek.jpg"
import Bodrum from "../companent/images/boddrum.jpg"
import Kusadasi from "../companent/images/kusadasi.jpg"
import Marmaris from "../companent/images/marmariss.jpg"
import Bali from "../companent/images/bali.jpg"


const style = {
    cardText:{color:"red"},
    body:{background:"rgba(72, 62, 51, 0.3)",borderRadius:"6px",borderBottom:"solid",display:"grid"}
}
class TravelWorld extends Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign:"center",marginTop:"20px"}}>Erkən rezervasiya</h2>    
        <div className="container row ">
            <div className="col-7">
                  <img src={Antalya} className="card-img" alt="..." style={{height:"400px",marginTop:"20px",borderRadius:"60px"}}/>
                  <img src={Marmaris} className="card-img" alt="..." style={{height:"400px",marginTop:"100px",borderRadius:"60px"}}/>
                  <img src={Bodrum} className="card-img" alt="..." style={{height:"400px",marginTop:"47px",borderRadius:"60px"}}/>
                  <img src={Kusadasi} className="card-img" alt="..." style={{height:"400px",marginTop:"50px",borderRadius:"60px"}}/>
                  <img src={Alanya} className="card-img" alt="..." style={{height:"400px",marginTop:"47px",borderRadius:"60px"}}/>
                  <img src={Belek} className="card-img" alt="..." style={{height:"400px",marginTop:"73px",borderRadius:"60px"}}/>
               </div>
          <div className="col-5" >
            {this.props.worldtour.travelWorldCategory.map(category=>(
            <div key={category.id}>
           <div className="card-body " style={{padding:"20px"}}>
             <h5 className="card-title">{category.categoryName}</h5>
            <p className="card-text" style={style.body} ><span style={style.cardText}>Say:</span> {category.person} </p>
            <p className="card-text" style={style.body}><span style={style.cardText}>Qiymət:</span> {category.price} başlayan qiymətlə</p>
            <p className="card-text" style={style.body}><span style={style.cardText}>Hotellər:</span>{category.hotel}</p>
            <p className="card-text" style={style.body}><span style={style.cardText}>Qiymətə daxildir:</span> {category.service}</p>
                 </div>
                </div>
            ))} 
                </div>
            </div>
            <h2 style={{textAlign:"center",marginTop:"20px"}}>Fürsət tur paketlər</h2>
            <div className="container row ">
                <div className="col-7">
                    <img src={Bali} className="card-img" alt="..." style={{marginTop:"20px",borderRadius:"60px"}}/>
                </div>
                <div className="col-5">
                    {this.props.worldtour.balitour.map(category=>(
                        <div key={category.id}>
                            <div className="card-body">
    <h5 className="card-title">{category.name}</h5> 
    <p className="card-text" style={style.body}><span style={style.cardText}>Qiymət:</span>{category.price}</p>
    <p className="card-text" style={style.body}><span style={style.cardText}>Hotel:</span>{category.hotel} </p>
    <p className="card-text" style={style.body}> <span style={style.cardText}>Tur daxildir:</span>{category.service}</p>
    <p className="card-text" style={style.body}><span style={style.cardText}>Companiya:</span>{category.company}</p>
</div>
                        </div>
                    ))}

                </div>
            </div>



        <div style={{background:"rgba(72, 62, 51, 0.3)",borderRadius:"6px",marginLeft:"30%",marginRight:"30%",textAlign:"center",marginTop:"30px"}}>
                 <h3>Başqa turlar və yenilikləri öyrənmək üçün</h3>
                 <p>Öz Tur paketini yaratmaq üçün</p>
                 <p>Bizimlə əlaqə saxlayın siz hələdə düşünürsüz?</p>
                
                 </div>
        <hr style={{borderTop:"2px solid rgba(0,0,0,1)",}}></hr>
       
            </div>
        )
    }
}



function mapStoreToProps(state){
    return{
      worldtour:state.worldCategoryReducer,
    };
  }
export default  connect (mapStoreToProps)(TravelWorld)