import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Form, InputGroup, Button } from 'react-bootstrap';
import '../Styles/blog.css';
import Blogright from './Blogright';
import Blogleft from './Blogleft';
import Header from './Header';
import Footer from './Footer';

function Blogpage() {
    return (
        <div>
            <Header />
            <div className="main_heading px-1 px-lg-0 pt-3">
                <Container fluid="lg">
                    <Row>
                        <div className="heading_text">
                            <div className="heading_link py-2 d-flex justify-content-start flex-wrap text-start">
                                <NavLink to="/" className="fw-normal">Home</NavLink>
                                <span><i class="fa-solid fa-angle-right mx-2 heading_link_arrow"></i></span>
                                Blog
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <Container fluid="lg">
                    <Row className='column-gap-4'>
                        <Col md={8}>
                            <Blogleft />
                        </Col>
                        <Col className='d-none d-md-flex'>
                            <Blogright />
                        </Col>
                    </Row>

                </Container>
            </div >
            <Footer />
        </div >
    )
}

export default Blogpage
