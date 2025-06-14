import React, { useState } from "react";
import { Container, Nav, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import '../Styles/product.css';
import Cashback from "./Cashback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/week_sales.css';

function Product() {
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
    // Image Zooming js
    const [isZoomed, setIsZoomed] = useState(false);
    const [xy, setXy] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const bounds = e.target.getBoundingClientRect();

        // Get mouse position relative to image
        const x = ((e.clientX - bounds.left) / bounds.width) * 100;
        const y = ((e.clientY - bounds.top) / bounds.height) * 100;

        setXy({ x, y });
    };

    const productSlider = [{
        index: 1,
        img: <img src={require('../img/furniture-4-1-300x300.jpg')} alt='Not Found' />,
        description: "Wooden Round Coffee Table with Lift Top",
        mainprice: "$163",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        index: 2,
        img: <img src={require('../img/furniture-22-300x300.jpg')} alt='Not Found' />,
        description: "Spacewood 4 Door Wardrobe Natural Finish, Brown",
        mainprice: "$166",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        index: 3,
        img: <img src={require('../img/furniture-4-500x500.jpg')} alt='Not Found' />,
        description: "Solid Wood Rattan Tv Unit – Natural Finish",
        mainprice: "$178",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        index: 4,
        img: <img src={require('../img/furniture-24-300x300.jpg')} alt='Not Found' />,
        description: "Full Length Mirror Arch, Wall Mirror Hanging",
        mainprice: "$198",
        isHot: "HOT",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        index: 5,
        img: <img src={require('../img/196-300x300.jpg')} alt='Not Found' style={{ opacity: 0.5 }} />,
        description: "High seating comfort with built in armrest",
        mainprice: "$1,465",
        cutprice: "$1,536",
        soldout: "SOLD OUT",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        index: 6,
        img: <img src={require('../img/autopart-2-300x300.jpg')} alt='Not Found' />,
        description: "18V Cordless Multi-Surface Handheld Vacuum Tool",
        mainprice: "$21",
        isHot: "HOT",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    }
    ];
    return (
        <>
            <div className="main_heading px-1 px-lg-0 pt-3">
                <Container fluid="lg">
                    <Row>
                        <div className="heading_text">
                            <div className="heading_link py-2 d-flex justify-content-start flex-wrap text-start">
                                <NavLink to="/" className="fw-normal">Home</NavLink>
                                <span><i class="fa-solid fa-angle-right mx-2 heading_link_arrow"></i></span>
                                <NavLink to="/shoppage" className="fw-normal">Shop</NavLink>
                                <span><i class="fa-solid fa-angle-right mx-2 heading_link_arrow"></i></span>
                                <NavLink to="/shoppage" className="fw-normal"> Beds</NavLink>
                                <span><i class="fa-solid fa-angle-right mx-2 heading_link_arrow"></i></span>
                                Glass Vase Minimalist Creative Hydroponic Striped Vase Ornament
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="main px-1 px-lg-0">
                <Container className="my-4">
                    <Row className="mb-5">
                        <Col md={6} className="position-relative overflow-hidden">
                            <div
                                className="zoom-wrapper col-12 border-1 border rounded-2"
                                onMouseEnter={() => setIsZoomed(true)}
                                onMouseLeave={() => setIsZoomed(false)}
                                onMouseMove={handleMouseMove}
                            >
                                <img
                                    src={require('../img/furniture-21.jpg')}
                                    alt="Product"
                                    className={`img-fluid zoom-image ${isZoomed ? "zoomed" : ""}`}
                                    style={{ transformOrigin: `${xy.x}% ${xy.y}%` }}
                                />
                            </div>
                            {/* <img src={require('../img/furniture-21.jpg')} alt="Product" className="img-fluid border-1 border rounded-2" /> */}
                            <div className="img_control_nav">
                                <ul className="d-flex ps-0 mt-3 justify-content-center flex-wrap gap-2">
                                    <li className="active"><a href="#">
                                        <img src={require('../img/furniture-21-300x300.jpg')} alt="Product" /></a>
                                    </li>
                                    <li><a href="#">
                                        <img src={require('../img/furniture-21-2-300x300.jpg')} alt="Product" /></a>
                                    </li>
                                    <li><a href="#">
                                        <img src={require('../img/furniture-21-3-300x300.jpg')} alt="Product" /></a>
                                    </li>
                                    <li><a href="#">
                                        <img src={require('../img/furniture-21-4-300x300.jpg')} alt="Product" /></a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="full-img rounded-2"><i className="fa-solid fa-expand fa-xl" />
                            </a>
                        </Col>
                        <Col md={6}>
                            <div className="Product_text text-start px-0 px-sm-4">
                                <a href="#" className="brand_name">Haworth</a>
                                <h4 className="my-2">Glass Vase Minimalist Creative Hydroponic Striped Vase Ornament</h4>
                                <div className="review_text d-flex flex-wrap column-gap-2 mt-3">
                                    <div className="propduct_star d-flex column-gap-1">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </div>
                                    <span> 3.0 (1 Review)</span>
                                    <a href="#">Write a review</a>
                                </div>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-1"><i className="fa-solid fa-check me-2" />
                                        Easy to assemble</li>
                                    <li className="mb-1"><i className="fa-solid fa-check me-2" />
                                        Maneuverability</li>
                                    <li className="mb-1"><i className="fa-solid fa-check me-2" />
                                        Value for money</li>
                                </ul>
                                <h3>$78</h3>
                                <span className="instock px-2 py-1 rounded-2">In stock</span>
                                <br />
                                <Button variant="dark" size="lg" className="col-12 py-3 mt-4 mb-3 rounded-2">
                                    + BUY PRODUCT
                                </Button>
                                <div className="wishlist_add">
                                    <a href="#wishlist" className="me-4">
                                        <i className="fa-regular fa-heart me-2" />Add to wishlist
                                    </a>
                                    <a href="#compare">
                                        <i className="fa-solid fa-right-left me-2" />Add to compare
                                    </a>
                                </div>

                                <div className="offer pt-3 mt-2">
                                    <p>Special offer</p>
                                    <ul className="border border-black p-3 rounded-2">
                                        <li className="mb-2"><img src={require('../img/iconoir_mastercard-card.jpg')} alt="" className="me-2" />
                                            10% off, maximum $20 when paying with PayPal</li>
                                        <li>
                                            <img src={require('../img/solar_sale-linear.jpg')} alt="" className="me-2" />
                                            50% off or more iPad cases, covers & keyboard folios</li>
                                    </ul>
                                </div>
                                <div className="meta_content d-flex flex-column row-gap-1">
                                    <p className="mb-1">SKU: <span>D5722KBVCE</span></p>
                                    <p className="mb-1">Categories: <span>Beds, Office Furniture, Tables</span></p>
                                    <ul className="mb-0 ps-0 d-flex column-gap-3">
                                        <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                        <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Cashback />
                    </Row>
                    <Row className="mt-5 pt-5 justify-content-center">
                        <Nav variant="tabs" defaultActiveKey="description" className="description_tab mb-3">
                            <Nav.Item className="pe-sm-3 py-2 border-1 border-sm-end">
                                <NavLink eventKey="description" className="active"><strong style={{ color: "black" }}>Description</strong></NavLink>
                            </Nav.Item>
                            <Nav.Item className="px-sm-3 py-2 border-1 border-sm-end">
                                <NavLink eventKey="specifications"><span><strong>Specifications</strong></span></NavLink>
                            </Nav.Item>
                            <Nav.Item className="ps-sm-3 py-2">
                                <NavLink eventKey="reviews"><span><strong>Reviews (1)</strong></span></NavLink>
                            </Nav.Item>
                        </Nav>
                        <Row className="mt-5 row-gap-4">
                            <Col lg={5}>
                                <div className="description_text">
                                    <p className="mb-0 text-start lh-lg">
                                        Compellingly grow performance based mindshare through parallel potentialities. Rapidiously underwhelm
                                        top-line catalysts for change before best-of-breed materials. Competently brand timely catalysts
                                        for change through sustainable systems. Completely expedite ubiquitous bandwidth after integrated
                                        action items. Progressively transform leading-edge supply chains whereas flexible niche markets.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                {/* Table Section */}
                                <Table>
                                    <tbody>
                                        <tr className="flex-wrap">
                                            <td className="text-start py-3 col-12 col-sm-3"><strong>Shipping</strong></td>
                                            <td className="text-start">We currently offer free shipping worldwide on all orders over $100.</td>
                                        </tr>
                                        <tr className="flex-wrap">
                                            <td className="text-start py-3 col-12 col-sm-3"><strong>Sizing</strong></td>
                                            <td className="text-start">Fits true to size. Do you need size advice?</td>
                                        </tr>
                                        <tr className="flex-wrap">
                                            <td className="text-start py-3 col-12 col-sm-3"><strong>Return & Exchange</strong></td>
                                            <td className="text-start">If you are not satisfied with your purchase you can return it to us within 14 days for an exchange or refund.</td>
                                        </tr>
                                        <tr className="flex-wrap">
                                            <td className="text-start py-3 col-12 col-sm-3"><strong>Assistance</strong></td>
                                            <td className="text-start">Contact us on (+44) 555 88 65, or email us at support@themesky.com</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="my-5">
                        <div className="product_slider my-5">
                            <div className="product_slider_text text-start">
                                <h3 className="fw-bold">Related products</h3>
                            </div>
                            <Slider {...settings} className='slider py-4 py-lg-0 mt-4'>
                                {productSlider.map((item, index) => (
                                    <div key={index} className='Products_box p-2 rounded-3'>
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
                                ))}
                            </Slider>
                        </div>
                    </Row>
                </Container >
            </div >
        </>
    );
}

export default Product;
