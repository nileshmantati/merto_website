import React from 'react';
import { Container, Row, Col, Card, ListGroup, Form, InputGroup, Button } from 'react-bootstrap';
import '../Styles/blog.css';

function Blogright() {
    const posts = [{
        index: 1,
        img: <img src={require('../img/blog-1-300x300.jpg')} alt="Post 1" className="me-2" />,
        description: "Weekday Outfit Inspiration for All Occasions",
        date: "April 25, 2025"
    },
    {
        index: 2,
        img: <img src={require('../img/blog-2-300x300.jpg')} alt="Post 1" className="me-2" />,
        description: "100% Pure & Natural Sage Essential Oil",
        date: "April 22, 2025"
    },
    {
        index: 3,
        img: <img src={require('../img/blog-3-300x300.jpg')} alt="Post 1" className="me-2" />,
        description: "Tips for Cleaning Desktop & Laptop",
        date: "April 18, 2025"
    },
    {
        index: 4,
        img: <img src={require('../img/blog-4-300x300.jpg')} alt="Post 1" className="me-2" />,
        description: "Giorgio Armani Si Intense Eau de Parfum Review",
        date: "April 15, 2025"
    },
    ];
    const tags = [
        "#sofa",
        "#chair",
        "#table",
        "#wardrobe",
        "#lamp",
        "#shelves",
        "#interior",
        "#decor",
        "#modern",
        "#vintage",
        "#wood",
        "#couch",
        "#mattress",
        "#pillow",
        "#sideboard",
        "#bench",
        "#storage",
        "#comfort",
        "#office",
        "#outdoor",
    ];
    return (
        <div>
            <aside className="right_side">
                <InputGroup className="mb-3 rounded-2">
                    <Form.Control placeholder="Search for products..." />
                    <Button>
                        <i className="fa-solid fa-magnifying-glass" />
                    </Button>
                </InputGroup>

                <h5 className="fw-bold text-start mt-5">Categories</h5>
                <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className='ps-0'><i className="fa-solid fa-circle me-2" /><a href="#" className='col'>Autoparts <span className="float-end">(3)</span></a></ListGroup.Item>
                    <ListGroup.Item className='ps-0'><i className="fa-solid fa-circle me-2" /><a href="#" className='col'>Beauty & Fashion <span className="float-end">(4)</span></a></ListGroup.Item>
                    <ListGroup.Item className='ps-0'><i className="fa-solid fa-circle me-2" /><a href="#" className='col'>Cosmetics <span className="float-end">(7)</span></a></ListGroup.Item>
                    <ListGroup.Item className='ps-0'><i className="fa-solid fa-circle me-2" /><a href="#" className='col'>Decor & Accents <span className="float-end">(3)</span></a></ListGroup.Item>
                    <ListGroup.Item className='ps-0'><i className="fa-solid fa-circle me-2" /><a href="#" className='col'>Electronics <span className="float-end">(5)</span></a></ListGroup.Item>
                    <ListGroup.Item className='ps-0'><i className="fa-solid fa-circle me-2" /><a href="#" className='col'>Quote <span className="float-end">(2)</span></a></ListGroup.Item>
                </ListGroup>

                <h5 className="fw-bold text-start mt-5" >Popular Posts</h5>
                <ul className='popular_posts ps-0 mb-0'>
                    {posts.map((item, index) => (
                        <li key={index} className='d-flex py-4 column-gap-3 border-1 border-bottom'>
                            <div className="img_box overflow-hidden rounded-2">
                                <a href="#">
                                    {item.img}
                                </a>
                            </div>
                            <div className='d-flex flex-column'>
                                <a href="#">{item.description}</a>
                                <span className='text-start'>{item.date}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <h5 className="fw-bold text-start mt-4" >Recent Comments</h5>
                <ul className='comment_box mb-0 ps-0 mt-4'>
                    <li className='border-bottom border-1'>
                        <div className="d-flex">
                            <img src={require('../img/7947020c4383dd4f1197f95638a33a6ae8dc41fbbe3105ec124eed0feed07ce7.png')} alt="" className='rounded-2' />
                            <div className="d-flex flex-column ms-3 justify-content-center">
                                <a href='#' className='text-start'>Myoui Mina</a>
                                <small className='text-start'>May 23, 2025</small>
                            </div>
                        </div>
                        <div className=" mt-4">
                            <h6 className='text-start'>Perfect!!!</h6>
                            <p className='text-start'>I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
                        </div>
                    </li>
                    <li className='py-4'>
                        <div className="d-flex">
                            <img src={require('../img/c1cdf649f1bd86553a1d14a5b5e9a5ce0233782907d4bf8fae34dd30296ea67c.png')} alt="" className='rounded-2' />
                            <div className="d-flex flex-column ms-3 justify-content-center">
                                <a href='#' className='text-start'>Park John</a>
                                <small className='text-start'>May 20, 2025</small>
                            </div>
                        </div>
                        <div className=" mt-4">
                            <h6 className='text-start'>OMG I LOVE IT!!!</h6>
                            <p className='text-start'>I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
                        </div>
                    </li>
                </ul>
                <h5 className="fw-bold text-start mt-2 mb-4" >Tags</h5>
                <div className="tags d-flex flex-wrap row-gap-3">
                    {tags.map((item, index) => (
                        <a key={index} href="#" className='px-2 py-1 rounded-2 me-3'>{item}</a>
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default Blogright
