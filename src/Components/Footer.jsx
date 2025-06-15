import React from 'react';
import '../Styles/Footer.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-dark px-1 px-lg-0 pt-5 pb-3">
            <Container fluid="lg">
                {/* Newsletter */}
                <Row className='mb-5 pb-5'>
                    <div className="text-center">
                        <h4 className="fw-bold">Join our newsletter</h4>
                        <p className='fs-6'>Get recommendations, tips, updates, promotions and more.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="newsletter-input col-6 position-relative mt-4">
                                <Form.Control
                                    type="email"
                                    placeholder="enter your email address"
                                    className="border-0 col-6 py-3"
                                />
                                <Button variant="dark" className='newsletter-btn'><i className="fa-solid fa-arrow-right" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Row>

                {/* Footer Sections */}
                <div className="d-flex text-start flex-wrap row-gap-5 mb-5">
                    {/* Contact Info */}
                    <Col xs={12} md={6} lg={3} className='text-center text-md-start'>
                        <h3 className="fw-bold mb-4"><img src={require('../img/logo-furniture.png')} alt="Not Found Logo" width={130} height={40} /></h3>
                        <div className="d-flex justify-content-md-start justify-content-center">
                            <span><i className="fa-solid fa-location-dot me-2" /></span>
                            <p>29 SE 2nd Ave, Miami<br />Florida 33131, United States</p>
                        </div>
                        <div className="d-flex justify-content-md-start justify-content-center">
                            <i className="fa-regular fa-envelope me-2" />
                            <p>info@example.com</p>
                        </div>
                        <a href="#" className='number fs-5 fw-bold'>(+92) 3942 7879</a>
                    </Col>

                    {/* Shop More */}
                    <Col xs={12} sm={6} md={3} lg={2}>
                        <div className="px-3">
                            <h6 className="fw-bold">SHOP MORE</h6>
                            <ul className='footer_menu mb-0 ps-0 mt-4 row-gap-3'>
                                <li><NavLink to="/shoppage">New Arrival</NavLink></li>
                                <li><NavLink to="#">Sale off</NavLink></li>
                                <li><NavLink to="#">Living Room</NavLink></li>
                                <li><NavLink to="#">Bedroom</NavLink></li>
                                <li><NavLink to="#">Dinner Room</NavLink></li>
                            </ul>
                        </div>
                    </Col>

                    {/* Categories Continued */}
                    <Col xs={12} sm={6} md={3} lg={2}>
                        <h6 className="fw-bold">&nbsp;</h6>
                        <ul className='footer_menu mb-0 ps-0 mt-4 row-gap-3'>
                            <li><NavLink to="#">Bathroom</NavLink></li>
                            <li><NavLink to="#">Kitchen Room</NavLink></li>
                            <li><NavLink to="#">Home Office</NavLink></li>
                            <li><NavLink to="#">Home Decoration</NavLink></li>
                            <li><NavLink to="#">Outdoor</NavLink></li>
                        </ul>
                    </Col>

                    {/* Shopping */}
                    <Col xs={12} sm={6} md={3} lg={2}>
                        <h6 className="fw-bold">SHOPPING</h6>
                        <ul className='footer_menu mb-0 ps-0 mt-4 row-gap-3'>
                            <li><NavLink to="#">Wishlist</NavLink></li>
                            <li><NavLink to="#">Shop by Brand</NavLink></li>
                            <li><NavLink to="#">Offers</NavLink></li>
                            <li><NavLink to="#">Track order</NavLink></li>
                            <li><NavLink to="#">Size Guide</NavLink></li>
                        </ul>
                    </Col>

                    {/* Information */}
                    <Col xs={12} sm={6} md={3} lg={2}>
                        <h6 className="fw-bold">INFOMATION</h6>
                        <ul className='footer_menu mb-0 ps-0 mt-4 row-gap-3'>
                            <li><NavLink to="#">Track Order</NavLink></li>
                            <li><NavLink to="#">Shipping & Returns</NavLink></li>
                            <li><NavLink to="#">About us</NavLink></li>
                            <li><NavLink to="#">Help</NavLink></li>
                            <li><NavLink to="#">Gift Cards</NavLink></li>
                        </ul>
                    </Col>

                    {/* Account */}
                    <Col xs={12} sm={6} md={3} lg={1}>
                        <h6 className="fw-bold">ACCOUNT</h6>
                        <ul className='footer_menu mb-0 ps-0 mt-4 row-gap-3'>
                            <li><NavLink to="#">Cart</NavLink></li>
                            <li><NavLink to="#">My account</NavLink></li>
                            <li><NavLink to="#">My orders</NavLink></li>
                            <li><NavLink to="#">Wishlist</NavLink></li>
                            <li><NavLink to="#">Affiliate Program</NavLink></li>
                        </ul>
                    </Col>
                </div>

                {/* Bottom */}
                <div className="d-flex justify-content-between flex-wrap align-items-center pt-4 border-top row-gap-3">
                    <p className="col-12 mb-0 col-md text-md-start">Copyright © Merto. All Rights Reserved</p>
                    <div className="copy_icon col-12 col-md d-flex justify-content-center align-items-center gap-3">
                        <i className="fa-brands fa-facebook-f" />
                        <i className="fa-brands fa-tiktok" />
                        <i className="fa-brands fa-x-twitter" />
                        <i className="fa-brands fa-youtube" />
                        <i className="fa-brands fa-instagram" />
                    </div>
                    <div className="col-12 col-md d-flex justify-content-center justify-content-md-end">
                        <img src={require('../img/payment-icons-2.png')} alt="" className='col-6' />
                    </div>
                </div>
            </Container>
        </footer >
    );
};

export default Footer;
