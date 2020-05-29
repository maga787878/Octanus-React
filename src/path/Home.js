import React, { Component } from 'react'
import Carusel from "../companent/Corusel/Corusel";
import Card from "../companent/card/Card";
import Img from "../companent/img/Img";
import Img2 from "../companent/img/Img2"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carusel/>
                <Card/>
                <Img/>
                <Img2/>
            </div>
        )
    }
}
