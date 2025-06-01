import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/week_sales.css';

function Weeksales() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

    const weekSlider = [{
        indexs: 1,
        img: <img src={require('../img/furniture-6-300x300.jpg')} alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home..",
        fullstars: <i className="fa-solid fa-star fa-sm" />,
        halfstars: < i className="fa-solid fa-star-half-stroke fa-sm" />,
        emptystars: <i className="fa-regular fa-star fa-sm" />,
        mainprice: "$50",
        cutprice: "$75",
        discount: "-33%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 2,
        img: <img src={require('../img/furniture-3-300x300.jpg')} alt='Not Found' />,
        description: "Studio Designs Home, Heather Studio Designs..",
        fullstars: <i className="fa-solid fa-star fa-sm" />,
        halfstars: <i className="fa-solid fa-star-half-stroke fa-sm" />,
        emptystars: <i className="fa-regular fa-star fa-sm" />,
        mainprice: "$192",
        cutprice: "$239",
        discount: "-20%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 3,
        img: <img src={require('../img/furniture-5-300x300.jpg')} alt='Not Found' />,
        description: "Mid Century Modern Round Dining Table in Oak",
        fullstars: <i className="fa-solid fa-star fa-sm" />,
        halfstars: <i className="fa-solid fa-star-half-stroke fa-sm" />,
        emptystars: <i className="fa-regular fa-star fa-sm" />,
        mainprice: "$569",
        cutprice: "$1,099",
        discount: "-48%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 4,
        img: <img src={require('../img/196-300x300.jpg')} alt='Not Found' />,
        description: "High seating comfort with built in armrest",
        fullstars: <i className="fa-solid fa-star fa-sm" />,
        halfstars: <i className="fa-solid fa-star-half-stroke fa-sm" />,
        emptystars: <i className="fa-regular fa-star fa-sm" />,
        mainprice: "$1,465",
        cutprice: "$1,536",
        discount: "SOLD OUT",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 5,
        img: <img src={require('../img/furniture-29-300x300.jpg')} alt='Not Found' />,
        description: "Slate Table Lamp with Natural Slate Finish",
        fullstars: <i className="fa-solid fa-star fa-sm" />,
        halfstars: <i className="fa-solid fa-star-half-stroke fa-sm" />,
        emptystars: <i className="fa-regular fa-star fa-sm" />,
        mainprice: "$138",
        cutprice: "$188",
        discount: "-26%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    ];
    return (
        <section className='weekslider container py-5'>
            <div className="weekslider_text text-start">
                <h3>Don't miss this week's sales</h3>
            </div>
            <Slider {...settings} className='slider py-4 py-lg-0 mt-4'>
                {weekSlider.map((item, index) => (
                    <div key={index} className='item d-flex py-4 flex-wrap p-3 rounded-3 bg-white'>
                        <a href="#">
                            <div className="img_box col-12 position-relative">
                                {item.img}
                                <div className={`position-absolute top-0 start-0 p-1 
                            ${item.discount === 'SOLD OUT' ? 'sold' : 'discount'}
                            ` }>{item.discount}</div>
                                <div className='group_btn position-absolute top-0 end-0 p-1 d-flex flex-column row-gap-1'>
                                    <a href="#" className='px-2 py-1 rounded-2'>{item.like}</a>
                                    <a href="#" className='px-2 py-1 rounded-2'>{item.compare}</a>
                                    <a href="#" className='px-2 py-1 rounded-2'>{item.search}</a>
                                    <a href="#" className='px-2 py-1 rounded-2'>{item.cart}</a>
                                </div>
                            </div>
                        </a>
                        <div className="text_box d-flex flex-column align-items-start pt-3">
                            <a href="#" className='text-decoration-none'>
                                <p className='mb-0 text-start'>{item.description}</p>
                            </a>
                            <h6 className='text-capitalize text-start d-flex align-items-center mt-2'>{item.mainprice} <span className='text-decoration-line-through d-flex align-items-center ms-2'>{item.cutprice}</span></h6>
                            <div className="star_box mt-2">
                                {item.indexs === 1 && (
                                    <div className='d-flex column-gap-1'>
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.halfstars}
                                    </div>
                                )}
                                {item.indexs === 2 && (
                                    <div className='d-flex column-gap-1'>
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                    </div>
                                )}
                                {item.indexs === 3 && (
                                    <div className='d-flex column-gap-1'>
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.emptystars}
                                    </div>
                                )}
                                {item.indexs === 4 && (
                                    <div className='d-flex column-gap-1'>
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.fullstars}
                                        {item.emptystars}
                                    </div>
                                )}
                                {item.indexs === 5 && (
                                    <div className='d-flex column-gap-1'>
                                        {item.emptystars}
                                        {item.emptystars}
                                        {item.emptystars}
                                        {item.emptystars}
                                        {item.emptystars}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section >
    )
}

export default Weeksales;
