import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Shop.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Shop() {
    // Filter options
    const colors = [
        { color: '#232228', colorname: "Black", count: 6 },
        { color: '#A06C30', colorname: "Brown", count: 13 },
        { color: '#E0E0E0', colorname: "Gray", count: 4 },
        { color: '#25B14C', colorname: "Green", count: 3 },
        { color: '#292E4E', colorname: "Navy", count: 2 },
        { color: '#FF9E20', colorname: "Orange", count: 2 },
        { color: '#FFD1DC', colorname: "Pink", count: 1 },
        { color: '##f1f1f1', colorname: "White", count: 5 },
        { color: '#F2E576', colorname: "Yellow", count: 2 }
    ];

    // Brands
    const brands = [
        { name: "Amazon", count: 8 },
        { name: "Apple", count: 11 },
        { name: "Ashley", count: 3 },
        { name: "Asus", count: 3 },
        { name: "Basett", count: 5 },
        { name: "Cerave", count: 2 },
        { name: "Clinique", count: 4 }
    ]
    // Prices
    const prices = [
        { range: '0 - $100' },
        { range: '$100 - $200' },
        { range: '$200 - $500' },
        { range: '$500' },
    ]
    // Rating
    const rating = [
        {
            stars: [<i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />
            ],
            count: "13",
        },
        {
            stars: [<i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-regular fa-star fa-sm" />

            ],
            count: "11",
        },
        {
            stars: [<i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-regular fa-star fa-sm" />,
            <i className="fa-regular fa-star fa-sm" />
            ],
            count: "1",
        },
        {
            stars: [<i className="fa-solid fa-star fa-sm" />,
            <i className="fa-solid fa-star fa-sm" />,
            <i className="fa-regular fa-star fa-sm" />,
            <i className="fa-regular fa-star fa-sm" />,
            <i className="fa-regular fa-star fa-sm" />
            ],
            count: "1",
        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 8,
        slidesToScroll: 2,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const categoriesslider = [{
        img: <img src={require('../img/cat-27.jpg')} alt='Not Found' />,
        title: "Beds"
    },
    {
        img: <img src={require('../img/cat-31.jpg')} alt='Not Found' />,
        title: "Bookcase"
    },
    {
        img: <img src={require('../img/cat-28.jpg')} alt='Not Found' />,
        title: "Cabinets"
    },
    {
        img: <img src={require('../img/cat-25.jpg')} alt='Not Found' />,
        title: "Chairs"
    },
    {
        img: <img src={require('../img/cat-32.jpg')} alt='Not Found' />,
        title: "Fireplaces"
    },
    {
        img: <img src={require('../img/cat-30.jpg')} alt='Not Found' />,
        title: "Lighting"
    },
    {
        img: <img src={require('../img/cat-36.jpg')} alt='Not Found' />,
        title: "Mirrors & Clocks"
    },
    {
        img: <img src={require('../img/cat-29.jpg')} alt='Not Found' />,
        title: "Office Furniture"
    },
    {
        img: <img src={require('../img/cat-33.jpg')} alt='Not Found' />,
        title: "Outdoor"
    },
    {
        img: <img src={require('../img/cat-34.jpg')} alt='Not Found' />,
        title: "Rugs"
    },
    {
        img: <img src={require('../img/cat-24.jpg')} alt='Not Found' />,
        title: "Sectionals"
    },
    {
        img: <img src={require('../img/cat-23.jpg')} alt='Not Found' />,
        title: "Sofas"
    },
    {
        img: <img src={require('../img/cat-36.jpg')} alt='Not Found' />,
        title: "Tables"
    },
    {
        img: <img src={require('../img/cat-35.jpg')} alt='Not Found' />,
        title: "Wall Decor"
    },];
    const products = [{
        indexs: 1,
        img: <img src={require('../img/furniture-7-700x700 (1).jpg')} alt='Not Found' />,
        description: "Milo Brass And Black Metal Lamp Ø18cm x 30cm",
        mainprice: "$82",
        isHot: "HOT",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 2,
        img: <img src={require('../img/furniture-14-700x700.jpg')} alt='Not Found' />,
        description: "Light Luxury Urban Leather Lounge Chair Home Living",
        mainprice: "$179",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 3,
        img: <img src={require('../img/furniture-17-700x700.jpg')} alt='Not Found' />,
        description: "Howard Chandelier Six Long Arms – Gunmetal",
        mainprice: "$745",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 4,
        img: <img src={require('../img/furniture-6-700x700.jpg')} alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home..",
        mainprice: "$50",
        cutprice: "$75",
        discount: "-33%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 5,
        img: <img src={require('../img/furniture-16-700x700.jpg')} alt='Not Found' />,
        description: "Drawer Record Storage Cabinet Turntable Stand",
        mainprice: "$108",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 6,
        img: <img src={require('../img/furniture-4-500x500.jpg')} alt='Not Found' />,
        description: "Solid Wood Rattan Tv Unit – Natural Finish",
        mainprice: "$178",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 7,
        img: <img src={require('../img/furniture-10-700x700.jpg')} alt='Not Found' />,
        description: "Stickley Furniture Mission Collection Oak Tall..",
        mainprice: "$293",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 8,
        img: <img src={require('../img/furniture-3-500x500.jpg')} alt='Not Found' />,
        description: "Studio Designs Home, Heather Studio Designs..",
        mainprice: "$192",
        cutprice: "$239",
        discount: "-20%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 9,
        img: <img src={require('../img/furniture-8-700x700.jpg')} alt='Not Found' />,
        description: "Geo Carved Almond Brown Kids Performance..",
        mainprice: "$449",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 10,
        img: <img src={require('../img/furniture-15-700x700.jpg')} alt='Not Found' />,
        description: "Modern Large Accent Lounge Chair, Leisure..",
        mainprice: "$143",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 11,
        img: <img src={require('../img/furniture-18-300x300.jpg')} alt='Not Found' />,
        description: "Beckham 4L Chandelier White Linen Fabric shades",
        mainprice: "$493",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 12,
        img: <img src={require('../img/furniture-5-300x300.jpg')} alt='Not Found' />,
        description: "Mid Century Modern Round Dining Table in Oak",
        mainprice: "$569",
        cutprice: "$1,099",
        discount: "-48%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 13,
        img: <img src={require('../img/196-300x300.jpg')} alt='Not Found' style={{ opacity: 0.5 }} />,
        description: "High seating comfort with built in armrest",
        mainprice: "$1,465",
        cutprice: "$1,536",
        discount: "-48%",
        soldout: "SOLD OUT",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 14,
        img: <img src={require('../img/furniture-21-300x300.jpg')} alt='Not Found' />,
        description: "Glass Vase Minimalist Creative Hydroponic Striped..",
        mainprice: "$78",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 15,
        img: <img src={require('../img/furniture-29-300x300.jpg')} alt='Not Found' />,
        description: "Slate Table Lamp with Natural Slate Finish",
        mainprice: "$138",
        cutprice: "$188",
        discount: "-26%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 16,
        img: <img src={require('../img/furniture-22-300x300.jpg')} alt='Not Found' />,
        description: "Spacewood 4 Door Wardrobe Natural Finish, Brown",
        mainprice: "$166",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 17,
        img: <img src={require('../img/furniture-9-300x300.jpg')} alt='Not Found' />,
        description: "Queen Size Dorel Living Braylon Twin Bed",
        mainprice: "$138",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 18,
        img: <img src={require('../img/furniture-11-300x300.jpg')} alt='Not Found' />,
        description: "Kitchenaid Toaster 2 Slice Stainless Steel",
        mainprice: "$98",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 19,
        img: <img src={require('../img/furniture-12-300x300.jpg')} alt='Not Found' />,
        description: "KitchenAid Artisan Mixer 175 Dried Rose",
        mainprice: "$130",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 20,
        img: <img src={require('../img/furniture-13-300x300.jpg')} alt='Not Found' />,
        description: "Round Canvas Wall Art Painting, Buddha Canvas Wal...",
        mainprice: "$110",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 21,
        img: <img src={require('../img/furniture-19-300x300.jpg')} alt='Not Found' />,
        description: "Partners Counter Height Bench, Baron Counter Stool",
        mainprice: "$1,050",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 22,
        img: <img src={require('../img/furniture-20-300x300.jpg')} alt='Not Found' />,
        description: "Patio Dining Solid Wood Acacia and Metal Chair",
        mainprice: "$528",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 23,
        img: <img src={require('../img/furniture-24-300x300.jpg')} alt='Not Found' />,
        description: "Full Length Mirror Arch, Wall Mirror Hanging",
        mainprice: "$198",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 24,
        img: <img src={require('../img/furniture-25-300x300.jpg')} alt='Not Found' />,
        description: "Classic & Modern Look Wooden Upholstered Sofa",
        mainprice: "$314",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 25,
        img: <img src={require('../img/furniture-26-300x300.jpg')} alt='Not Found' />,
        description: "Upholstered Sofa, Tufted Back Comfy Velvet Long Couch",
        mainprice: "$453",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 26,
        img: <img src={require('../img/furniture-27-300x300.jpg')} alt='Not Found' />,
        description: "Pastel Blue Outlines on Dark Blue, Sofa Cushion",
        mainprice: "$50",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 27,
        img: <img src={require('../img/furniture-28-300x300.jpg')} alt='Not Found' />,
        description: "Furniture Reaux Power Motion Sofa, Power Recline",
        mainprice: "$2,500",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 28,
        img: <img src={require('../img/furniture-4-1-300x300.jpg')} alt='Not Found' />,
        description: "Wooden Round Coffee Table with Lift Top",
        mainprice: "$163",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    ];
    return (
        <div>
            <div className="main_heading px-4 px-lg-0 pt-3">
                <Container fluid="lg">
                    <div className="heading_text">
                        <div className="heading_link py-2 d-flex justify-content-center">
                            <NavLink to="/" className="fw-normal">Home</NavLink>
                            <span><i class="fa-solid fa-angle-right mx-2 heading_link_arrow"></i></span>
                            Shop
                        </div>
                        <h3>Shop</h3>
                    </div>
                </Container>
            </div>
            <div className="categories_list px-4 px-lg-0 pt-2">
                <Container fluid="lg">
                    <Slider {...settings} className='categories_slider pb-4 mt-4 border-1 border-bottom'>
                        {categoriesslider.map((item, index) => (
                            <div key={index} className='item px-2'>
                                <a href="#">
                                    <div className="img_box rounded-circle overflow-hidden position-relative">
                                        {item.img}
                                        <div className="img_arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                    <h4><NavLink>{item.title}</NavLink></h4>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
            <div className="main pb-5 px-4 px-lg-0">
                <Container fluid="lg" className="my-4" >
                    <Row>
                        {/* Filters */}
                        <Col md={3} className='d-none d-md-flex flex-column'>
                            <h5 className='text-start mb-4 fs-5'>Colors</h5>
                            <ul className='color_filter mb-0 ps-0 d-flex flex-column row-gap-2'>
                                {colors.map((item, idx) => (
                                    <li key={idx}><a href="#">
                                        <span className='color px-2 me-2' style={{ backgroundColor: item.color }}></span>
                                        {item.colorname}
                                    </a><span className='count'>{item.count}</span></li>
                                ))}
                            </ul>
                            <h5 className='text-start mt-5 mb-4 fs-5'>Brands</h5>
                            <ul className='checkbox_filter mb-0 ps-0 d-flex flex-column row-gap-2'>
                                {brands.map((item, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='col ms-2 d-flex justify-content-start'>
                                            {item.name}<span className='count ms-3'>({item.count})</span>
                                        </label></li>
                                ))}
                            </ul>
                            <h5 className='text-start mt-5 mb-4 fs-5'>Price</h5>
                            <ul className='checkbox_filter mb-0 ps-0 d-flex flex-column row-gap-2'>
                                {prices.map((item, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='col ms-2 d-flex justify-content-start'>
                                            {item.range}
                                        </label></li>
                                ))}
                            </ul>
                            <h5 className='text-start mt-5 mb-4 fs-5'>Customer Rating</h5>
                            <ul className='checkbox_filter mb-0 ps-0 d-flex flex-column row-gap-2'>
                                {rating.map((item, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" />
                                        <div className="rating-star col ms-2 text-start">
                                            {item.stars}
                                        </div>
                                        <span className='count'>({item.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        {/* Product grid */}
                        <Col md={9}>
                            <Row>
                                {products.map((item, index) => (
                                    <Col key={item.id} xs={6} sm={4} md={3} className="mb-4">
                                        <div key={index} className='Products_box d-flex py-2 px-2 flex-wrap p-3 rounded-3 bg-white'>
                                            <a href="#">
                                                <div className="img_box col-12 position-relative">
                                                    {item.img}
                                                    {item.isHot && <span className="badge hot">HOT</span>}
                                                    {item.discount && <span className="badge discount">{item.discount}</span>}
                                                    {item.soldout && <span className="badge soldout">{item.soldout}</span>}
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
                                                <h6 className='text-capitalize text-start d-flex align-items-center mt-2'>{item.mainprice} <span
                                                    className='text-decoration-line-through d-flex align-items-center ms-2'>{item.cutprice}</span></h6>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <Row>
                                <div className="pagination mt-3 d-flex justify-content-center">
                                    <ul className='page_numbers d-flex ps-0 mb-0 column-gap-2'>
                                        <li className='px-3 py-2 active border-1 border rounded-3'>
                                            <span>1</span>
                                        </li>
                                        <li className='px-3 py-2 border-1 border rounded-3'>
                                            <span>2</span>
                                        </li>
                                        <li className='px-4 py-2 border-1 border rounded-3'>
                                            <span>Next</span>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
        </div >
    )
}

export default Shop
