import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/homeslider.css';
import Button from 'react-bootstrap/Button';

function Homeslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        arrows: false
    };
    return (
        <section className='slider_section px-md-3 px-lg-5'>
            <Slider {...settings} className='slider ps-0 ps-sm-5 py-4 py-lg-0'>
                <div className='item position-relative d-flex py-4 px-5 flex-wrap flex-md-nowrap justify-content-md-end flex-lg-row flex-row-reverse'>
                    <div className="img_box col-12 col-md-6 col-lg-8">
                        <img src={require('../img/slide1-demo3.png')} alt="" />
                    </div>
                    <div className="item_box d-none d-lg-flex position-absolute top-50 end-50 translate-middle-y">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                            <Button href="#" className='btn text-uppercase py-2 px-4'>shop now</Button>
                        </div>
                    </div>
                    <div className="item_box col-12 col-md-6 d-flex d-lg-none ps-0 ps-sm-5 ps-md-0">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3 ps-2 ps-md-0 ps-sm-5">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                            <Button href="#" className='btn text-uppercase py-2 px-4'>shop now</Button>
                        </div>
                    </div>
                </div>
                <div className='item position-relative d-flex py-4 px-5 flex-wrap flex-md-nowrap justify-content-md-end flex-lg-row flex-row-reverse'>
                    <div className="img_box col-12 col-md-6 col-lg-8">
                        <img src={require('../img/slide2-demo3.png')} alt="" />
                    </div>
                    <div className="item_box d-none d-lg-flex position-absolute top-50 end-50 translate-middle-y">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>full bed <br /> upholstered <br /> headboard</h1>
                            <Button href="#" className='btn text-uppercase py-2 px-4'>shop now</Button>
                        </div>
                    </div>
                    <div className="item_box col-12 col-md-6 d-flex d-lg-none ps-0 ps-sm-5 ps-md-0">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3 ps-2 ps-md-0 ps-sm-5">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                            <Button href="#" className='btn text-uppercase py-2 px-4'>shop now</Button>
                        </div>
                    </div>
                </div>
                <div className='item position-relative d-flex py-4 px-5 flex-wrap flex-md-nowrap justify-content-md-end flex-lg-row flex-row-reverse'>
                    <div className="img_box col-12 col-md-6 col-lg-8">
                        <img src={require('../img/slide3-demo3.png')} alt="" />
                    </div>
                    <div className="item_box d-none d-lg-flex position-absolute top-50 end-50 translate-middle-y">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>morden <br /> dining set <br /> for kitchen</h1>
                            <Button href="#" className='btn text-uppercase py-2 px-4'>shop now</Button>
                        </div>
                    </div>
                    <div className="item_box col-12 col-md-6 d-flex d-lg-none ps-0 ps-sm-5 ps-md-0">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3 ps-2 ps-md-0 ps-sm-5">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                            <Button href="#" className='btn text-uppercase py-2 px-4'>shop now</Button>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default Homeslider
