import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../Styles/header.css';
import '../Styles/all.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className='py-0 py-md-2 border-bottom border-1'>
                <div className="header_top px-3 px-lg-5 d-none d-md-block">
                    <Container fluid="lg">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="top_left d-flex align-items-center column-gap-4">
                                <div className="language-currency d-flex border-end pe-2">
                                    <ul className="language mb-0 ps-0">
                                        <li className='px-2 position-relative'><a href='#' className='d-flex column-gap-1 align-items-center text-decoration-none'><span><img src={require('../img/english.png')} /></span>English<i className="fa-solid fa-chevron-down fa-xs ms-1"></i></a>
                                            <ul className='down mb-0 p-3 position-absolute rounded-1'>
                                                <li className='mb-2'><a href="#" className='d-flex column-gap-2 text-decoration-none'><span><img src={require('../img/espanol.png')} /></span>Español</a></li>
                                                <li className='mb-2'><a href="#" className='d-flex column-gap-2 text-decoration-none'><span><img src={require('../img/francais.png')} /></span>Français</a></li>
                                                <li className=''><a href="#" className='d-flex column-gap-2 text-decoration-none'><span><img src={require('../img/portugues.png')} /></span>Português</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="language mb-0 ps-0">
                                        <li className='px-2 position-relative'><a href='#' className='d-flex column-gap-1 align-items-center text-decoration-none'>USD<i className="fa-solid fa-chevron-down fa-xs ms-1"></i></a>
                                            <ul className='down mb-0 p-3 position-absolute rounded-1 w-100'>
                                                <li className='mb-2'><a href="#" className='d-flex column-gap-2 text-decoration-none'>EUR</a></li>
                                                <li className='mb-2'><a href="#" className='d-flex column-gap-2 text-decoration-none'>BRL</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-none d-lg-flex column-gap-3">
                                    <Link className='text-capitalize text-decoration-none'>track order</Link>
                                    <Link className='text-capitalize text-decoration-none'>contact</Link>
                                    <Link className='text-capitalize text-decoration-none'>FAQs</Link>
                                </div>
                            </div>
                            <div className="top_right d-flex align-items-center">
                                <div className="top_icons d-flex border-end pe-3 column-gap-3">
                                    <i className="fa-brands fa-facebook-f" />
                                    <i className="fa-brands fa-tiktok" />
                                    <i className="fa-brands fa-youtube" />
                                    <i className="fa-brands fa-instagram" />
                                    <i className="fa-brands fa-x-twitter" />
                                </div>
                                <div className="contact col d-flex align-items-center ps-3">
                                    <Link className='text-capitalize text-decoration-none'>contact us 24/7<span className='ps-3 fw-bold'>(+92) 3942 7879</span></Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
            <div className="header_middle position-sticky top-0 px-1 px-lg-5 px-sm-3 bg-white">
                <Container fluid="lg">
                    <Navbar expand="md" className="py-0 py-md-4">
                        <Navbar.Brand href="#home" className="me-0"><img src={require('../img/logo-furniture.png')} alt="Not Found Logo" width={130} height={40} /></Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav" className='d-none d-md-flex justify-content-end'>
                            <Nav className="col-11 col-lg-10 justify-content-between">
                                <div className="category_search col-7 d-flex p-2 rounded-3 align-items-center justify-content-between">
                                    <NavDropdown title="All Categories" id="basic-nav-dropdown">
                                        <NavDropdown.Item>Autopart</NavDropdown.Item>
                                        <NavDropdown.Item className='ps-4'>Accessories</NavDropdown.Item>
                                        <NavDropdown.Item className='ps-4'>Car Care</NavDropdown.Item>
                                        <NavDropdown.Item className='ps-4'>Car Electronics</NavDropdown.Item>
                                        <NavDropdown.Item className='ps-4'>Equipment</NavDropdown.Item>
                                    </NavDropdown>
                                    <Form className="search d-flex ps-2 col-7 col-lg-8 border-start border-1">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search for products"
                                            className="ps-0 ps-lg-2 pe-0 me-0 me-lg-2 bg-transparent rounded-0"
                                            aria-label="Search"
                                        />
                                        <Button variant=""><i className="fa-solid fa-magnifying-glass"></i></Button>
                                    </Form>
                                </div>
                                <div className="d-flex column-gap-3">
                                    <Link to="" className='account text-decoration-none d-flex align-items-center fw-medium'><i className="fa-solid fa-user fa-lg me-3"></i>Account</Link>
                                    <Link to="" className='account text-decoration-none d-flex align-items-center'><i className="fa-regular fa-heart fa-lg"></i></Link>
                                    <Link to="" className='account text-decoration-none d-flex align-items-center'><i className="fa-solid fa-cart-shopping fa-lg"></i></Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar expand="md" className="mini_nav py-4 d-md-none position-relative">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className='mini_nav_div d-md-none'>
                                <Nav className="flex-column d-md-none">
                                    <div className="mini_nav_top pb-3 d-flex justify-content-between align-content-center col-12">
                                        <span className="py-2 px-3 bg-black"><i className="fa-solid fa-bars" /></span>
                                        <a href="#" className="text-decoration-none d-flex align-items-center justify-content-center col-7">Shop
                                            Categories</a>
                                        <span className="py-2 px-3"><i className="fa-solid fa-xmark fs-4" /></span>
                                    </div>
                                    <ul className="navbar-nav mini_nav_ul col-12 flex-column mb-lg-0 overflow-y-scroll">
                                        <li className="nav-item py-2 px-3">
                                            <NavLink to="/" className="fw-medium">Home
                                                <i className="fa-solid fa-plus ms-1 arrow-icon" /></NavLink>
                                        </li>
                                        <li className="nav-item py-2 px-3">
                                            <NavLink to="/shoppage" className="fw-medium">Shop
                                                <i className="fa-solid fa-plus ms-1 arrow-icon" /></NavLink>
                                        </li>
                                        <li className="nav-item py-2 px-3">
                                            <NavLink to="/" className="fw-medium">Products
                                                <i className="fa-solid fa-plus ms-1 arrow-icon" /></NavLink>
                                        </li>
                                        <li className="nav-item py-2 px-3">
                                            <NavLink to="/" className="fw-medium">Pages
                                                <i className="fa-solid fa-plus ms-1 arrow-icon" /></NavLink>
                                        </li>
                                        <li className="nav-item py-2 px-3">
                                            <NavLink to="/" className="fw-medium">Blog</NavLink>
                                        </li>
                                        <li className="nav-item py-2 px-3">
                                            <NavLink to="/" className="fw-medium">Abous us</NavLink>
                                        </li>
                                        <li className="nav-item py-2 px-3">
                                            <NavLink to="/" className="fw-medium"><span className='text_gray'>Recently viewed</span>
                                                <i className="fa-solid fa-plus ms-1 arrow-icon" /></NavLink>
                                        </li>
                                    </ul>
                                    <div className="main_bottom_r py-2 px-3 d-flex justify-content-between align-items-center col-12"
                                        id="main_bottom_r">
                                        <div className="top_deal ps-0 pe-2 d-flex align-items-center">
                                            <a href="#" className="text-decoration-none text-nowrap me-3 fw-bold">
                                                Today's Deal
                                            </a>
                                            <span className="text-white rounded-1">
                                                HOT
                                            </span>
                                        </div>
                                        <div className="wishcart d-flex align-items-center">
                                            <a href="#">
                                                <i className="fa-regular fa-heart icons" />
                                            </a>
                                        </div>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Navbar>
                </Container >
            </div >
            <div className="header_bottom px-lg-5 px-md-3 d-none d-md-block bg-white border-1 border-bottom">
                <Container fluid="lg">
                    <div className="header_main_bottom col d-flex align-items-center">
                        <div className="vertical_menu_box col-1 col-xl-3 position-relative">
                            <div className="vertical_menu_head px-3 px-lg-4 py-1 me-0 d-flex align-items-center col-6 col-xl-12">
                                <a href="#" className="text-decoration-none d-flex align-items-center col-12 justify-content-between">
                                    <i className="fa-solid fa-bars icons" />
                                    <span className="text-uppercase text-nowrap d-none d-xl-block">Shop by Categories</span>
                                    <div className="menu_head_icon ms-3 d-none d-xl-block">
                                        <i className="fa-solid fa-angle-down ms-1 icons" />
                                    </div>
                                </a>
                            </div>
                            <nav className="vertical_menu position-absolute overflow-hidden">
                                <ul className="mb-0 ps-0 d-flex flex-column row-gap-1">
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-1-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">Living room</a>
                                    </li>
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-2-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">bedroom</a>
                                    </li>
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-3-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">Dinning room</a>
                                    </li>
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-4-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">bathroom</a>
                                    </li>
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-5-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">kitchen room</a>
                                    </li>
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-6-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">home office</a>
                                    </li>
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-7-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">home decoration</a>
                                    </li>
                                    <li className="py-2 px-4 border-bottom border-1">
                                        <img src={require('../img/icon-8-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">outdoor</a>
                                    </li>
                                    <li className="py-2 px-4">
                                        <img src={require('../img/icon-9-1.png')} alt="" />
                                        <a href="#" className="text-decoration-none text-capitalize">sale off</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="main_menu_box py-3 col ms-4">
                            <nav className="main_menu col-12 h-100">
                                <ul className="ps-0 mb-0 col-12 h-100 d-flex gap-2 gap-lg-4">
                                    <li>
                                        <NavLink to="/" className="text-decoration-none text-capitalize">Home
                                            <i className="fa-solid fa-chevron-down ms-2 fa-sm arrow_icon" /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/shoppage" className="text-decoration-none text-capitalize">shop
                                            <i className="fa-solid fa-chevron-down ms-2 fa-sm arrow_icon" /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="text-decoration-none text-capitalize">products
                                            <i className="fa-solid fa-chevron-down ms-2 fa-sm arrow_icon" /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="text-decoration-none text-capitalize">pages
                                            <i className="fa-solid fa-chevron-down ms-2 fa-sm arrow_icon" /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="text-decoration-none text-capitalize">blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" className="text-decoration-none text-capitalize">about us</NavLink>
                                    </li>
                                    <li className='ms-auto'>
                                        <NavLink to="/" className="text-decoration-none text-capitalize">recently viewed<i className="fa-solid fa-chevron-down ms-2 fa-sm arrow_icon" /></NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container >
            </div>
        </>
    );
}

export default Header
