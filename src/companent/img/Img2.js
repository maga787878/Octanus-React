import React, { Component } from 'react'

export default class Img2 extends Component {
    render() {
        return (
            <div className="container">
                <h2 style={{textAlign:"center"}}>Niyə biz?</h2>
                <div className="row Row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
                        <h4>Müştərilərimizi dəstəkləyirik</h4>
                        <p>Çünki daha çoxunu istıdiklırini bilirik və istəklərini həyata keçirmək üçün çalışırıq</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
                        <h4>Sığorta</h4>
                        <p>Ölkə içi və Ölkə xarici səyahətlərinizdə sığortaya sahib olacaqsız </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
                        <h4>Əlavə səyahət günləri</h4>
                        <p>Daimi müştərilərimizi səyahət paketlərini seçdikləri zaman şirkətimiz tərəfindən bonus günlər hədiyyə</p>
                    </div>
                </div>
                <h3 style={{textAlign:"center"}}> Bəs sən bizim ailənin üzvüsən?
                </h3>
            </div>
        )
    }
}
