import React, { Component } from "react";

export default class Transfer extends Component {
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
          title: "Vito",
          imageUrl:
            "https://www.internasyonel.com.tr/wp-content/uploads/2019/09/kisiye-ozel-vip-transfer.jpg",
          description:
            "Hava limanı transferi , şəhər içi gəzinti və ya günlük kiralamaq",
          details: {
            say: "1-6",
            qiymet: "50 $",
            tur:
              "Komfortlu avtomobil, soyuducu sistemi, xoş ünsüyyətçil sürücü və içkilər",
          },
        },
        {
          title: "Sedan",
          imageUrl:
            "https://www.bosnahersek.ba/wp-content/uploads/2016/11/Vip-transfer.jpg",
          description:
            "Hava limanı transferi , şəhər içi gəzinti və ya günlük kiralamaq",
          details: {
            say: "1-4",
            qiymet: "40 $",
            tur:
              "Komfortlu avtomobil, soyuducu sistemi, xoş ünsüyyətçil sürücü və içkilər",
          },
        },
        {
          title: "Sprinter",
          imageUrl:
            "https://www.luxorvip.com/mt-content/uploads/2017/08/9081b-99b0b-deluxemercedessprinter.png",
          description:
            " Hava limanı transferi , şəhər içi gəzinti və ya günlük kiralamaq",
          details: {
            say: "1-17",
            qiymet: "100 $",
            tur:
              "Komfortlu avtomobil, soyuducu sistemi, xoş ünsüyyətçil sürücü və içkilər",
          },
        }
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
        <h2 style={{ textAlign: "center", marginTop: "20px",paddingTop:"20px" }}>
          Vip Transer
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
            <span>Vip Transer</span>
          </div>

          <div className="slide__details">
            <div className="slide__details__title">Transer haqqında</div>

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
              <h3 className="slide__details__subtitle">Transerə daxildir</h3>
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
