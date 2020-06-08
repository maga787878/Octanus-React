import React, { Component } from "react";

export default class TravelWorld extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      animating: false,
      animationDirection: "",
      animationDuration: 300,
      currentSlide: 0,
      slides: [
        {
          title: "Antalya",
          imageUrl:
            "https://i1.wp.com/theluxuryeditor.com/wp-content/uploads/2020/01/198589995.jpg?fit=1280%2C853&ssl=1",
          description:
            "RAMADA RESORT LARA 5*,RIXOS DOWNTOWN 5*, DOUBLETREE BY HILTON ANTALYA CITY CENTRE 5*, CLUB HOTEL SERA 5* , DELPHIN IMPERIAL 5* , TITANIC MARDAN PALACE 5* , SHERWOOD PRIZE HOTEL 3*, LARA FAMILY CLUB 4*, LARA HADRIANUS HOTEL 4* və.s",
          details: {
            say: "1",
            qiymet: "300 $",
            tur:
              "7 gecə 8 gün ( Artırada bilərsiniz ), Transfer, Sığorta, Hər şey daxil (AI,UAI), Aviabilet, 3*, 4*, 5*  Hotellər və.s",
          },
        },
        {
          title: "Marmaris",
          imageUrl:
            "https://imagessl.etstur.com/files/images/hotelImages/TR/51980/l/Grand-Yazici-Club-Marmaris-Palace-Genel-195297.jpg",
          description:
            "AQUA HOTEL MARMARIS 5* , ELEGANCE HOTEL 5* ,GOLDEN ROCK BEACH 5* ,GRAND YAZICI CLUB TURBAN 5*, IDEAL PANORAMA HOTEL 4* ,MARTI RESORT 5* və.s",
          details: {
            say: "1",
            qiymet: "400 $",
            tur:
              "7 gecə 8 gün ( Artırada bilərsiniz ), Transfer, Sığorta, Hər şey daxil (AI,UAI), Aviabilet, 3*, 4*, 5*  Hotellər və.s",
          },
        },
        {
          title: "Bodrum",
          imageUrl:
            "https://www.tatilyum.net/wp-content/uploads/2019/01/Lujo-Bodrum-Genel-263924-1.jpg",
          description:
            "AZKA HOTEL 5* , CHARM BEACH HOTEL 4* , COSTA BLU RESORT 4* ,LA BLANCHE ISLAND BODRUM 5* , LUJO BODRUM 5* , THOR EXCLUSIVE HOTEL 5* ,OKALIPTUS HOTEL 4* və.s",
          details: {
            say: "1",
            qiymet: "250 $",
            tur:
              "7 gecə 8 gün ( Artırada bilərsiniz ), Transfer, Sığorta, Hər şey daxil (AI,UAI), Aviabilet, 3*, 4*, 5*  Hotellər və.s",
          },
        },
        {
          title: "Kuşadası",
          imageUrl:
            "https://r-cf.bstatic.com/images/hotel/max1024x768/161/161848022.jpg",
          description:
            "AQUA FANTASY AQUAPARK HOTEL 5* ,CLUB YALI HOTELS & RESORT 5* ,GRAND BLUE SKY 4* ,KORUMAR DE LUXE 5* ,LE BLEU HOTEL & RESORT 5* ,RICHMOND EPHESUS RESORT 5* və,s",
          details: {
            say: "1",
            qiymet: "280 $",
            tur:
              "7 gecə 8 gün ( Artırada bilərsiniz ), Transfer, Sığorta, Hər şey daxil (AI,UAI), Aviabilet, 3*, 4*, 5*  Hotellər və.s",
          },
        },
        {
          title: "Alanya",
          imageUrl:
            "https://q-cf.bstatic.com/images/hotel/max1280x900/199/199311614.jpg",
          description:
            "ACAR HOTEL ALANYA 4*, ARMAS PRESTIGE 5* ,ASKA JUST IN BEACH 5* ,AYDINBEY GOLD DREAMS 5* ,AZURA DELUXE & SPA 5*, CAMPUSHILL HOTEL 5* ,DIAMOND HILL RESORT 5*,EFTALIA OCEAN 5* və,s",
          details: {
            say: "1",
            qiymet: "200 $",
            tur:
              "7 gecə 8 gün ( Artırada bilərsiniz ), Transfer, Sığorta, Hər şey daxil (AI,UAI), Aviabilet, 3*, 4*, 5*  Hotellər və.s",
          },
        },
        {
          title: "Belek",
          imageUrl:
            "https://ucdn.tatilbudur.net/Otel/960x475/titanic-deluxe-belek_268515.jpg",
          description:
            "ADORA GOLF RESORT HOTEL 5*,BELEK BEACH RESORT 5*,CORNELIA DE LUXE RESORT 5*,CRYSTAL TAT BEACH 5*,GRANADA LUXURY BELEK 5* və,s",
          details: {
            say: "1",
            qiymet: "200 $",
            tur:
              "7 gecə 8 gün ( Artırada bilərsiniz ), Transfer, Sığorta, Hər şey daxil (AI,UAI), Aviabilet, 3*, 4*, 5*  Hotellər və.s",
          },
        },
        {
          title: "Bali",
          imageUrl:
            "https://akisoto.com/wp-content/uploads/2020/01/Bali-Temple-Complex-near-a-Lake-1024x682.jpg",
          description:
            "MERCURE BALİ NUSA DUA,ALAYA UBUD, HOTEL NİKKO BALİ BENOA BEACH, KOMANEKA AT RASA SAYANG və.s",
          details: {
            say: "1",
            qiymet: "1000 $",
            tur:
              "Aviabilet, Sığorta, Hotel , Transer , Yemək və,s 15 gün tur paket alana 1 gün bizdən sizə hədiyyə",
          },
        },
      ],
    };

    this.changeSlide = this.changeSlide.bind(this);
  }

  fireAnims(duration) {
    this.setState({
      animating: true,
      animationDirection: "out",
    });
    // halfway
    setTimeout(() => {
      this.setState({
        animating: true,
        animationDirection: "in",
      });
    }, duration / 2);
    // done
    setTimeout(() => {
      this.setState({
        animating: false,
        animationDirection: "",
      });
    }, duration);
  }

  changeSlide(dir) {
    const currentSlide = this.state.currentSlide;
    const slides = this.state.slides;

    if (dir === "right") {
      if (currentSlide < slides.length - 1) {
        this.fireAnims(this.state.animationDuration * 2);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide + 1,
          });
        }, this.state.animationDuration);
      }
    } else {
      if (currentSlide > 0) {
        this.fireAnims(this.state.animationDuration * 2);
        window.setTimeout(() => {
          this.setState({
            currentSlide: currentSlide - 1,
          });
        }, this.state.animationDuration);
      }
    }
  }

  determineDir(delta) {
    if (delta > 0) {
      return "right";
    } else {
      return "left";
    }
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }
  render() {
    let classes = ["slideshow"];
    if (this.state.animating) {
      classes.push(
        "slideshow--animated slideshow--" + this.state.animationDirection
      );
    } else {
      classes = ["slideshow"];
    }
    return (
      <div className={classes.join(" ")}>
        <Slide
          title={this.state.slides[this.state.currentSlide].title}
          image={this.state.slides[this.state.currentSlide].imageUrl}
          description={this.state.slides[this.state.currentSlide].description}
          details={this.state.slides[this.state.currentSlide].details}
          count={this.state.currentSlide + 1}
          changeSlide={this.changeSlide}
          slideLength={this.state.slides.length}
        />
      </div>
    );
  }
}

class Slide extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "20px",paddingTop: "20px" }}>
          Ölkə Xarici Turlar
        </h2>
        <div className="slide">
          <div className="slide__decorative-sidebar">
            <img src={this.props.image} alt="." />
          </div>

          <div className="slide__info">
            <div className="slide__info__text">
              <h1 className="slide__info__title">{this.props.title}</h1>
              <p className="slide__info__description">
                {this.props.description}
              </p>
            </div>
            <img
              src={this.props.image}
              alt={this.props.title}
              className="slide__info__image"
            />
            <div className="slide__arrows">
              <a
                className={
                  this.props.count > 1
                    ? `slide__arrows__arrow`
                    : `slide__arrows__arrow slide__arrows__arrow--disabled`
                }
                onClick={(e) => this.props.changeSlide("left")}
                href
              >
                {`<`}
                {/* shrug */}
              </a>
              <a
                className={
                  this.props.count < this.props.slideLength
                    ? `slide__arrows__arrow`
                    : `slide__arrows__arrow slide__arrows__arrow--disabled`
                }
                onClick={(e) => this.props.changeSlide("right")}
                href
              >
                >
              </a>
            </div>
          </div>

          <div className="slide__next">
            <span>Ölkə xarİcİ turlar</span>
          </div>

          <div className="slide__details">
            <div className="slide__details__title">Tur haqqında</div>

            <div className="slide__details__block slide__details__block--temp">
              <h3 className="slide__details__subtitle">Say</h3>
              <p className="slide__details__block__description">
                {this.props.details.say}
              </p>
            </div>

            <div className="slide__details__block slide__details__block--water">
              <h3 className="slide__details__subtitle">Qiymət (başlayan)</h3>
              <p className="slide__details__block__description">
                {this.props.details.qiymet}
              </p>
            </div>

            <div className="slide__details__block slide__details__block--nutrition">
              <h3 className="slide__details__subtitle">Tura daxildir</h3>
              <p className="slide__details__block__description">
                {this.props.details.tur}
              </p>
            </div>
          </div>

          <div className="slide__count">
            <p className="slide__count__title">Kəşf et</p>
            <span className="slide__count__count">
              0<span>{this.props.count}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
