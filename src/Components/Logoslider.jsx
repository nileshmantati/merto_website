import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import '../Styles/logoslider.css';

function Logoslider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const logoslider = [{
        index: 1,
        img: <img src={require('../img/furniture-brand-1.jpg')} alt="Brand-logo" />,
    },
    {
        index: 2,
        img: <img src={require('../img/furniture-brand-2-200x80.jpg')} alt="Brand-logo" />,
    },
    {
        index: 3,
        img: <img src={require('../img/furniture-brand-3.jpg')} alt="Brand-logo" />,
    },
    {
        index: 4,
        img: <img src={require('../img/furniture-brand-4.jpg')} alt="Brand-logo" />,
    },
    {
        index: 5,
        img: <img src={require('../img/furniture-brand-5.jpg')} alt="Brand-logo" />,
    },
    {
        index: 6,
        img: <img src={require('../img/furniture-brand-6.jpg')} alt="Brand-logo" />,
    },];
    return (
        <div>
            <section className='logoslider px-4 px-lg-0 py-4'>
                <Container fluid="lg">
                    <Slider {...settings} className='slider py-5 border-1 border-top'>
                        {logoslider.map((item, index) => (
                            <div key={index} className='item border-0'>
                                <Link to="#">
                                    {item.img}
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section >
        </div >
    )
}

export default Logoslider
