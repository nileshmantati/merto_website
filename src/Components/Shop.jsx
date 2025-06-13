import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Shop.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Shop() {
    const products = [
        { id: 1, name: "Milo Brass And Black Metal Lamp", price: "$82", img: "https://via.placeholder.com/150", tag: "HOT" },
        { id: 2, name: "Light Luxury Urban Leather Chair", price: "$179", img: "https://via.placeholder.com/150" },
        { id: 3, name: "Howard Chandelier Gunmetal", price: "$745", img: "https://via.placeholder.com/150" },
        { id: 4, name: "14-inch Fasion Simplicity Wall Clock", price: "$50", discount: "$75", img: "https://via.placeholder.com/150", discountRate: 33 },
        { id: 5, name: "Drawer Record Storage Cabinet", price: "$178", img: "https://via.placeholder.com/150" },
        { id: 6, name: "Studio Designs Home, Heather Chair", price: "$239", discount: "$299", discountRate: 20, img: "https://via.placeholder.com/150" }
    ];

    // Filter options
    const colors = [
        { color: '#232228', colorname: "Black", count: 6 },
        { color: '#A06C30', colorname: "Brown", count: 13 },
        { color: '#E0E0E0', colorname: "Gray", count: 4 },
        { color: '#25B14C', colorname: "Green", count: 3 },
        { color: '#292E4E', colorname: "Navy", count: 2 },
        { color: '#FF9E20', colorname: "Orange", count: 2 },
        { color: '#FFD1DC', colorname: "Pink", count: 1 },
        { color: '#ffffff', colorname: "White", count: 5 },
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
            <div className="main_content">
                <Container className="my-4">
                    <Row>
                        {/* Filters */}
                        <Col md={3}>
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
                            <ul className='brand_filter mb-0 ps-0 d-flex flex-column row-gap-2'>
                                {brands.map((item, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='col ms-2 d-flex justify-content-start'>
                                            {item.name}<span className='count ms-3'>({item.count})</span>
                                        </label></li>
                                ))}
                            </ul>
                        </Col>

                        {/* Product grid */}
                        <Col md={9}>
                            <Row>
                                {products.map((product) => (
                                    <Col key={product.id} sm={6} md={4} className="mb-4">
                                        <Card>
                                            {product.tag && <span className="badge bg-warning position-absolute" style={{ top: '10px', left: '10px' }}>{product.tag}</span>}
                                            {product.discountRate && <span className="badge bg-danger position-absolute" style={{ top: '10px', right: '10px' }}>-{product.discountRate}%</span>}
                                            <Card.Img variant="top" src={product.img} alt={product.name} />
                                            <Card.Body>
                                                <Card.Title>{product.name}</Card.Title>
                                                <Card.Text>
                                                    {product.discount ? <><s>{product.discount}</s> {product.price}</> : product.price}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default Shop
