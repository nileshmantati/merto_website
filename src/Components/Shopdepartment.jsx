import React from 'react';
import '../Styles/shopdepartment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageBox1 from '../img/image-box-1.jpg';
import imageBox2 from '../img/image-box-2.jpg';
import imageBox3 from '../img/image-box-3.jpg';
import imageBox4 from '../img/image-box-4.jpg';

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
        <section className='cash_back_section px-4 px-md-0 py-4 mt-5'>
            <Container fluid="md">
                <Row>
                    <div className="heading_text">
                        <h2 className='fs-3 mb-4'>Shop by Department</h2>
                    </div>
                    <Row>
                        <div className="department_main_box">
                            {shopdepartment.map((item, index) => (
                                <Col md={6} lg={3} key={index}>
                                    <Card style={{ width: '18rem' }} className='border-0'>
                                        <Card.Img variant="top" src={item.img} className='rounded-circle' />
                                        <Card.Body>
                                            <Card.Title><a href="#">{item.title}</a></Card.Title>
                                            <Button className='shop_btn'>Shop now<i className="fa-solid fa-arrow-right ms-2" />
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </div>
                    </Row>
                </Row>
            </Container>
        </section >
    )
}

export default Shopdepartment
