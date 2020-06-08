import React from 'react'
import Call from '../companent/images/call2.png'

export default function Contact() {
    return (
        <div>
            <img style={{width:"100%"}} src={Call} alt=".."/>

            <h3>Əlaqə vasitələri:</h3>
            <div className="row C">
                <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"><ul>
                    <li>
                        Telefon
                        </li>
                        <li>+994559190287</li>
                        </ul>
                        </div>
                <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <ul>
                    <li>
                        E-Mail
                        </li>
                        <li>Octanus.Travel@gmail.com</li>
                        </ul>
                        </div>
                      
                <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <ul>
                    <li>
                        Ünvan
                        </li>
                        <li>Xətai pros. 44a</li>
                        </ul>
                </div>
                <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <ul>
                    <li>
                        İş saatı
                        </li>
                        <li>
                       Hər gün: 09:00-18:00
                        </li>
                        <li>
                       Fasilə: 13:00-14:00
                        </li>
                        </ul>
                </div>
            </div>
      </div>
    )
}
