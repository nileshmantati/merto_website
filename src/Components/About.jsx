import React from 'react';
import '../Styles/about.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

function About() {
    const Facility_card = [{
        title: "fast, free shipping",
        description: "On order over $50",
        img: <i className="fa-solid fa-truck" />,
    }, {
        title: "next day delivery",
        description: "Free-spend over $99",
        img: <i className="fa-regular fa-clock" />
    },
    {
        title: "low price guarantee",
        description: "We offer competitive prices",
        img: <i className="fa-solid fa-hand-holding-dollar" />

    },
    {
        title: "Satisfaction Guarantee",
        description: "We Guarantee Our Products",
        img: <i className="fa-solid fa-thumbs-up" />
    }
    ];

    const store_info = [{
        img: <img src={require('../img/about-2.jpg')} alt="" className='w-100 h-100 rounded-2 overflow-hidden' />,
        title: "Los Angeles",
        description: "34 Main Street, Los Angeles 9021 United States"
    },
    {
        img: <img src={require('../img/about-3.jpg')} alt="" className='w-100 h-100 rounded-2 overflow-hidden' />,
        title: "New York",
        description: "515 Broadway 10015 New York United States"
    },
    {
        img: <img src={require('../img/about-4.jpg')} alt="" className='w-100 h-100 rounded-2 overflow-hidden' />,
        title: "California",
        description: "1000 California St 68114 Omaha United States"

    }];
    return (
        <div>
            <div className="main_heading px-1 px-lg-0 pt-3">
                <Container fluid="lg">
                    <div className="heading_text">
                        <div className="heading_link py-2 d-flex justify-content-center">
                            <NavLink to="/" className="fw-normal">Home</NavLink>
                            <span><i class="fa-solid fa-angle-right mx-2 heading_link_arrow"></i></span>
                            About
                        </div>
                    </div>
                </Container>
            </div>
            <article className='main-content px-1 px-lg-0 border-1 border-bottom'>
                <Container fluid="lg">
                    <div className="content_box">
                        <Row className='justify-content-center text-start'>
                            <Col md={8} className='mb-5 pb-5'>
                                <h1 className='pt-5 mb-4'>We believe that great design should be available to everyone</h1>
                                <p className='mb-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p className='mb-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <Row className='pt-4 row-gap-3'>
                                    <Col xs={12} sm={6} lg={3}>
                                        <div className="text-center">
                                            <h1 className="counter display-5">25</h1>
                                            <p className='mb-0'>years of experience in the clothing industry</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        <div className="text-center">
                                            <h1 className="counter display-5">+200</h1>
                                            <p className='mb-0'>showrooms around the world</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        <div className="text-center">
                                            <h1 className="counter display-5">+100M</h1>
                                            <p className='mb-0'>items of clothing sold annually</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        <div className="text-center">
                                            <h1 className="counter display-5">99%</h1>
                                            <p className='mb-0'>customers recommend our brand to their friends</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className="mission_box mb-5 border-1 border border-black rounded-2">
                        <Row className='p-5 align-items-center row-gap-4'>
                            <Col>
                                <Row className='row-gap-4'>
                                    <Col md={2}>
                                        <i className="fa-regular fa-file-lines" />
                                    </Col>
                                    <Col className='text-start'>
                                        <h1 className='mb-4'>Our Mission</h1>
                                        <p>As part of the TenTen Group, our mission is to make it easy to do business anywhere.</p>
                                        <p>We do this by giving suppliers the tools necessary to reach a global audience for their products, and by helping buyers find products and suppliers quickly and efficiently.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <img src={require('../img/about-1.jpg')} alt="" className=' w-100 h-100' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="content_box">
                        <Row className='justify-content-center'>
                            <Col md={9} className='pb-5 d-flex flex-column align-items-center'>
                                <h1 className='pt-5 mb-4 col-12 col-md-11 col-lg-9'>We enable innovation. From ideation all the way through to market delivery.</h1>
                                <Row className='pt-4 row-gap-3 col-12'>
                                    {Facility_card.map((item, index) => (
                                        <Col xs={12} sm={6} lg={3} key={index}>
                                            <div className="d-flex flex-column align-items-center row-gap-3">
                                                <div className="icon_box col-12 col-xl-2 me-xl-3">
                                                    {item.img}
                                                </div>
                                                <div>
                                                    <h6 className='text-capitalize mb-0'>{item.title}</h6>
                                                    <span className='mt-1'>{item.description}</span>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className="content_box">
                        <Row className='justify-content-center'>
                            <Col md={9} className='pb-5 d-flex flex-column align-items-center'>
                                <h1 className="outline-text">ALL WORLD</h1>
                                <h1 className='pt-2 mb-4'>Anytime, Anywhere</h1>
                                <p className='col-lg-11 lh-base'>As a platform, we continue to develop services to help businesses do more and discover new opportunities.
                                    Whether it’s sourcing from your mobile phone or contacting suppliers in their local language, turn to tenten.com for all your global business needs.</p>
                                <Row className='pt-4 row-gap-3 col-12'>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container >
            </article >
            <div className="Stores_in_world px-1 px-lg-0 py-5 mb-4">
                <Container fluid="lg">
                    <Row className='row-gap-3'>
                        {store_info.map((item, index) => (
                            <Col xs={12} sm={6} lg={4} key={index}>
                                <div>
                                    {item.img}
                                </div>
                                <div className="Store_text pt-3">
                                    <h5 className='title mb-0'>{item.title}</h5>
                                    <p className='mb-0 col-12 col-lg-8 text-center'>{item.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {/* <Row>
                        <Col xs={12} sm={6} lg={4}>
                            <div>
                                <img src={require('../img/about-2.jpg')} alt="" />
                            </div>
                            <div className="Store_text">
                                <h5 className='title mb-0'>Los Angeles</h5>
                                <p className='mb-0 col-12 col-lg-8 text-center'>34 Main Street, Los Angeles 9021
                                    United States</p>
                            </div>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </div>
    )
}

export default About
