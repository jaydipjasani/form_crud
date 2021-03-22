import React from 'react'
import Slider1 from "../img/slider1.jpg"
import Slider2 from "../img/slider2.jpg"
import Slider3 from "../img/slider3.jpg"

const Home = () => {
    return (
        <div className="py-4">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Slider1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Slider2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Slider3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href={Slider3} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={Slider2} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Home
