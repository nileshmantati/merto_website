import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/homeslider.css';
import Button from 'react-bootstrap/Button';

function Homeslider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <section className='slider_section px-md-3 px-lg-5 py-5'>
            <Slider {...settings} className='slider ps-5 py-5'>
                <div className='item py-5'>
                    <div className="img_box">
                        <img src={require('../img/slide1-demo3.png')} alt="" />
                    </div>
                    <div className="text_box d-flex flex-column align-items-start row-gap-3">
                        <h5>Made in Italy</h5>
                        <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                        <Button href="#" className='btn text-uppercase px-4 py-2 mt-3'>shop now</Button>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
            </Slider>
        </section>
    )
}

export default Homeslider
