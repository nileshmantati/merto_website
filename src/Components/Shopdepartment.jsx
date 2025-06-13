import React from 'react';
import '../Styles/shopdepartment.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import imageBox1 from '../img/image-box-1.jpg';
import imageBox2 from '../img/image-box-2.jpg';
import imageBox3 from '../img/image-box-3.jpg';
import imageBox4 from '../img/image-box-4.jpg';
import { Link } from "react-router-dom";

function Shopdepartment() {
    const shopdepartment = [{
        img: imageBox1,
        title: "Coffee Table from $20",
    },
    {
        img: imageBox2,
        title: "Sectionals from $300",
    },
    {
        img: imageBox3,
        title: "Flower Vase from $5",
    },
    {
        img: imageBox4,
        title: "Headboard Sale Off",
    }
    ];
    return (
        <section className='cash_back_section px-4 px-lg-0 py-4 my-5'>
            <Container fluid="lg">
                <Row>
                    <div className="heading_text">
                        <h2 className='fs-3 mb-4'>Shop by Department</h2>
                    </div>
                    <div className="department_main_box">
                        <Row>
                            {shopdepartment.map((item, index) => (
                                <Col sm={6} md={6} lg={3} key={index}>
                                    <Card className='px-3 border-0'>
                                        <Link to="#">
                                            <Card.Img variant="top" src={item.img} className='rounded-circle' />
                                        </Link>
                                        <Card.Body>
                                            <Card.Title><Link to="#">{item.title}</Link></Card.Title>
                                            <Button className='shop_btn'>Shop now<i className="fa-solid fa-arrow-right ms-2" />
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Row>
            </Container>
        </section >
    )
}

export default Shopdepartment
