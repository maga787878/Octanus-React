import React, { Component } from "react";
import "./City.scss";

export default class CityTour extends Component {
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
          title: "Quba",
          imageUrl:
            "https://live.staticflickr.com/1810/28363213427_38c88097b0_b.jpg",
          description:
            "Bura Yeni Zellandiyaya bənzəsə də doğma Qubamızdı. Tarixi şəhərə bizimlə birlikdə səfər etmək üçün siz də bizə qoşulun.Qeyd: Tur zamanı spirtli içkilər qəti qadağandır.6 yaşdan yuxarı tam ödəniş.",
          details: {
            say: "1",
            qiymet: "20 azn",
            tur:
              "Limitsiz fotosessiya, Komfortlu nəqliyyat, Ekskursiya, Səhər yeməyi. Bələdçi xidməti və.s",
          },
        },
        {
          title: "Göygöl",
          imageUrl:
            "https://bestbakutours.com/wp-content/uploads/2019/07/goygol-1.jpg",
          description:
            "Sizlərə 1 gecə, 2 günlük çox maraqlı proqram təklif edirik. Qalmamaqla -22 azn. Qeyd: Tur za manı spirtli içkilər qəti qadağandır. 6 yaşdan yuxarı tam ödəniş.",
          details: {
            say: "1",
            qiymet: "50 azn",
            tur:
              "Limitsiz fotosessiya, Komfortlu nəqliyyat, Ekskursiya, Səhər yeməyi. Bələdçi xidməti və.s",
          },
        },
        {
          title: "Naftalan",
          imageUrl:
            "https://ulduztourism.az/wp-content/uploads/2017/09/1460331917_naftalanseheri.jpg",
          description:
            "Yüksək xidmət əla keyfiyyət.Gündə 3 dəfə qidalanma,Naftalan vannaları,Ümumi qan analizləri,Həkim muayinəsi,Fizioterapiyalar, USM, EKQ, İnqalasiy a.Parafin, İsıq vannaları, Solyuks, Masaj və.s",
          details: {
            say: "1",
            qiymet: "30 azn",
            tur:
              "Limitsiz fotosessiya, Komfortlu nəqliyyat, Ekskursiya, Bələdçi xidməti və.s",
          },
        },
        {
          title: "İsmayıllı",
          imageUrl:
            "https://i.pinimg.com/originals/da/d0/6a/dad06a23eec8114eafa6771ccde8e4ed.jpg",
          description:
            "Ekskursiyalar:İsmayıllı gəzintisi,Lahıc qəsəbəsi,Asma körpü,İsmayıllı şəlaləsi,Sənətkarlıq dükkanları və.s Qeyd: Tur zamanı spirtli içkilər qəti qadağandır 6 yaşdan yuxarı tam ödəniş.",
          details: {
            say: "1",
            qiymet: "25 azn",
            tur:
              "Komfortlu nəqliyyat,Səhər yeməyi,Çay süfrəsi,Limitsiz foto çəkiliş,Diskoteka,Tur Rəhbər,Maraqlı oyunlar keçiriləcək və qalibə hədiyyələr veriləcək",
          },
        },
        {
          title: "Nabran",
          imageUrl:
            "https://r-cf.bstatic.com/images/hotel/max1024x768/205/205057250.jpg",
          description:
            "Toplanış yeri: Gənclik Mall / 28 Mall,Yola düşmə vaxtı -06:30 - 07:00 və Bakıya çatma vaxtı: 22:00/23:00",
          details: {
            say: "1",
            qiymet: "25 azn",
            tur: "Komfortlu Nəqliyyat,Səhər yeməyi,Bələdçi və,s",
          },
        },
        {
          title: "Qəbələ",
          imageUrl:
            "https://img.fotocommunity.com/qebele-azerbaijan-5bfdb82e-aaf2-4a4f-b0ff-046614d36810.jpg?height=1080",
          description: "Nohur göl,Xal-xal şəlal əsi,Qəbələnd və.s",
          details: {
            say: "1",
            qiymet: "18 azn",
            tur:
              "Limitsiz fotosessiya,Komfortlu nəqliyyat,Ekskursiya,Səhər yeməyi – (+əlavə istəklə nahar (25 azn)),Bələdçi xidməti və.s",
          },
        },
        {
          title: "Qax",
          imageUrl:
            "https://ulduztourism.az/wp-content/uploads/2017/09/maxresdefault-1-1.jpg",
          description:
            "İlisu kəndi - Ram Rama şəlaləsi,Sumuq qala,Ulu Körpü,Ləkit Kəndi - Mamırlı şəlaləsi Şəki Xan sarayı,Karvans aray ,Yəhyanın halvaçısı,Şəki Panoraması, Qəbələ-Nohurgöl Qeyd:Tur zamanı spirtli içkilər qəti qadağandır",
          details: {
            say: "1",
            qiymet: "49",
            tur:
              "Komfortlu nəqliyyat,Gecələmə - kənd evində (ailəvi gələnlər nəzərə alınacaq),Səhər yeməyi ( 1-ci Şamaxıda , 2-ci ama ekskluziv ),Çay süfrəsi ( Samovar çayı limitsiz,həmdə kənd halvasında ),Tur rəhbəri ,Limitsiz fotosessiya,Mafiya oyunu,Yol boyunca musiqi,Maraqlı və hədiyyəli oyunlar və.s",
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
          Ölkə daxili Turlar
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
            <span>Ölkə daxili turlar</span>
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
              <h3 className="slide__details__subtitle">Qiymət</h3>
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
