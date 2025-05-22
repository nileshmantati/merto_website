import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../Styles/header.css';
import '../Styles/all.min.css';

function Header() {
    return (
        <div className='container-fluid px-5'>
            <div className="header_top d-flex justify-content-between py-2">
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
                    <div className="d-flex column-gap-3">
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
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand href="#home"><img src={require('../img/logo-furniture.png')} alt="Not Found Logo" width={100} height={40} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" className='home'>Home</Link></Nav.Link>
                        <Nav.Link><Link to="">Link</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
