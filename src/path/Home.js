import React, { Component } from 'react'
import Corusel from "../companent/Corusel/Corusel";
import Card from "../companent/card/Card";
import Img from "../companent/img/Img";
import Img2 from "../companent/img/Img2"
// import Antalya from "../images/antalya.jpg"
// import Antalya2 from "../images/antalya2.jpg"
// import Bali from "../images/bali.jpg"



const data = [{
    id: 0,
    header: 'Antalya',
    body: 'Hələdə tətilə gediləcək yer axtarırsınız 200$-dan başlayan qiymətlə',
    colour: '#242846',
    img: 'https://www.bizevdeyokuz.com/wp-content/uploads/antalya-gezilecek-yerler-1-1155x675.jpg'
  }, {
    id: 1,
    header: 'Bali',
    body: 'Balini bizimlə kəşf edin 1000$-dan başlayan qiymətlə',
    colour: '#ba9077',
    img: 'https://i.pinimg.com/originals/b0/1c/67/b01c677365198ca77693d7b003d92c2f.jpg'
  }, {
    id: 2,
    header: 'Paris',
    body: 'Bal ayı üçün avropanı münasib qiymətə düşünürsüz əsl vaxtıdı əlaqə saxlayın ',
    colour: 'rgba(102, 75, 155, 0.84)',
    img: 'https://3.bp.blogspot.com/--AwDE-JQkRY/WMiyn7Ec9LI/AAAAAAAAFGs/NiptVX0czAo2onVcyBFlSumVIyA8sTSOQCLcB/s1600/tour_eiffel-paris.jpg'
  }, {
    id: 3,
    header: 'Vip Transfer',
    body: 'Hava limanı transferi və ölkə içi şəhər gəzintisi',
    colour: 'rgb(33, 101, 179)',
    img: 'https://pietraturizm.com/img/photos/vip.jpg'
  }, {
    id: 4,
    header: 'İsveç',
    body: 'Xüsusi qitmətə isveç tur paketi cəmi 500$',
    colour: 'rgba(255, 175, 76, 0.78)',
    img: 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Stockholm/stockholm-sehir.jpg'
  }];
export default class Home extends Component {
    render() {
        return (
            <div>
                <Corusel data={data}/>
                <Card/>
                <Img/>
                <Img2/>
            </div>
        )
    }
}
