import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/week_sales.css';

function Week_sales() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };
    const weekslider = [{
        img: <img src='../img/furniture-6-300x300.jpg' alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home Decor",
        fullstars: <i className="fa-solid fa-star" />,
        halfstars: <i className="fa-solid fa-star-half-stroke" />,
        emptystars: <i className="fa-regular fa-star" />,
        // price:

    },
    {
        img: <img src='../img/furniture-3-300x300.jpg' alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home Decor",
        fullstars: <i className="fa-solid fa-star" />,
        halfstars: <i className="fa-solid fa-star-half-stroke" />,
        emptystars: <i className="fa-regular fa-star" />,
        // price:
    },
    {
        img: <img src='../img/furniture-5-300x300.jpg' alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home Decor",
        fullstars: <i className="fa-solid fa-star" />,
        halfstars: <i className="fa-solid fa-star-half-stroke" />,
        emptystars: <i className="fa-regular fa-star" />,
        // price:
    },
    {
        img: <img src='../img/196-300x300.jpg' alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home Decor",
        fullstars: <i className="fa-solid fa-star" />,
        halfstars: <i className="fa-solid fa-star-half-stroke" />,
        emptystars: <i className="fa-regular fa-star" />,
        // price:
    },
    {
        img: <img src='../img/furniture-29-300x300.jpg' alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home Decor",
        fullstars: <i className="fa-solid fa-star" />,
        halfstars: <i className="fa-solid fa-star-half-stroke" />,
        emptystars: <i className="fa-regular fa-star" />,
        // price:
    },
    ];
    return (
        <section className='weekslider px-md-3 px-lg-5'>
            <Slider {...settings} className='slider ps-0 ps-sm-5 py-4 py-lg-0'>
                {weekslider.map((item, index) => (
                    <div key={index} className='item d-flex py-4 px-5 justify-content-md-end flex-wrap'>
                        <div className="img_box col-12">
                            {item.img}
                        </div>
                        <div className="item_box col-12 d-flex ps-0 ps-sm-5 ps-md-0">
                            <div className="text_box d-flex flex-column align-items-start row-gap-3 ps-2 ps-md-0 ps-sm-5">
                                <h5>Made in Italy</h5>
                                <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                            </div>
                        </div>
                    </div>
                ))}

                {/* <div className='item d-flex py-4 px-5 justify-content-md-end flex-wrap'>
                    <div className="img_box col-12">
                        <img src={require('../img/slide2-demo3.png')} alt="" />
                    </div>
                    <div className="item_box col-12 d-flex ps-0 ps-sm-5 ps-md-0">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3 ps-2 ps-md-0 ps-sm-5">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                        </div>
                    </div>
                </div>
                <div className='item d-flex py-4 px-5 justify-content-md-end flex-wrap'>
                    <div className="img_box col-12">
                        <img src={require('../img/slide3-demo3.png')} alt="" />
                    </div>
                    <div className="item_box col-12 d-flex ps-0 ps-sm-5 ps-md-0">
                        <div className="text_box d-flex flex-column align-items-start row-gap-3 ps-2 ps-md-0 ps-sm-5">
                            <h5>Made in Italy</h5>
                            <h1 className='text-capitalize text-start'>best seller <br /> sofa & chair <br /> livingroom</h1>
                        </div>
                    </div>
                </div> */}
            </Slider>
        </section>
    )
}

export default Week_sales
