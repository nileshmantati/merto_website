import React from 'react';
import '../Styles/cyberweekend.css';
import { Container, Row, Col } from 'react-bootstrap';

function Cyberweekend() {
    const cyberweekend = [{
        indexs: 1,
        img: <img src={require('../img/furniture-7-700x700 (1).jpg')} alt='Not Found' />,
        description: "Milo Brass And Black Metal Lamp Ø18cm x 30cm",
        mainprice: "$82",
        isHot: "HOT",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 2,
        img: <img src={require('../img/furniture-14-700x700.jpg')} alt='Not Found' />,
        description: "Light Luxury Urban Leather Lounge Chair Home Living",
        mainprice: "$179",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 3,
        img: <img src={require('../img/furniture-17-700x700.jpg')} alt='Not Found' />,
        description: "Howard Chandelier Six Long Arms – Gunmetal",
        mainprice: "$745",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 4,
        img: <img src={require('../img/furniture-6-700x700.jpg')} alt='Not Found' />,
        description: "14-inch Fasion Simplicity Quality Wall Clock, Home Decor",
        mainprice: "$50",
        cutprice: "$75",
        discount: "-33%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 5,
        img: <img src={require('../img/furniture-16-700x700.jpg')} alt='Not Found' />,
        description: "Drawer Record Storage Cabinet Turntable Stand",
        mainprice: "$108",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 6,
        img: <img src={require('../img/furniture-4-500x500.jpg')} alt='Not Found' />,
        description: "Solid Wood Rattan Tv Unit – Natural Finish",
        mainprice: "$178",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 7,
        img: <img src={require('../img/furniture-10-700x700.jpg')} alt='Not Found' />,
        description: "Stickley Furniture Mission Collection Oak Tall Bookcase",
        mainprice: "$293",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 8,
        img: <img src={require('../img/furniture-3-500x500.jpg')} alt='Not Found' />,
        description: "Studio Designs Home, Heather Studio Designs Chair",
        mainprice: "$192",
        cutprice: "$239",
        discount: "-20%",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 9,
        img: <img src={require('../img/furniture-8-700x700.jpg')} alt='Not Found' />,
        description: "Geo Carved Almond Brown Kids Performance Area Rug",
        mainprice: "$449",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    {
        indexs: 10,
        img: <img src={require('../img/furniture-15-700x700.jpg')} alt='Not Found' />,
        description: "Modern Large Accent Lounge Chair, Leisure Sofa Armchair",
        mainprice: "$143",
        like: <i className="fa-regular fa-heart fa-sm" />,
        compare: <i className="fa-solid fa-down-left-and-up-right-to-center fa-sm" />,
        search: <i className="fa-solid fa-magnifying-glass fa-sm" />,
        cart: <i className="fa-solid fa-cart-shopping fa-sm" />
    },
    ];
    return (
        <section className='py-5 px-4 px-lg-0'>
            <Container fluid="lg">
                <Row>
                    <div className="head_box pt-5">
                        <h2 className='text-capitalize fs-3 fw-bold'>Cyber weekend</h2>
                        <div className="content mt-5 d-flex justify-content-center flex-wrap column-gap-5 row-gap-3">
                            <div className="box">
                                <a href="#" className=' text-decoration-none'>
                                    <h2 className='fs-3'>+10% <br />OFF</h2>
                                </a>
                            </div>
                            <div className="box">
                                <a href="#" className=' text-decoration-none'>
                                    <h2 className='fs-3'>+20% <br />OFF</h2>
                                </a>
                            </div>
                            <div className="box">
                                <a href="#" className=' text-decoration-none'>
                                    <h2 className='fs-3'>+30% <br />OFF</h2>
                                </a>
                            </div>
                            <div className="box">
                                <a href="#" className=' text-decoration-none'>
                                    <h2 className='fs-3'>+40% <br />OFF</h2>
                                </a>
                            </div>
                            <div className="dark_box">
                                <a href="#" className=' text-decoration-none'>
                                    <h2 className='fs-3'>+50% <br />OFF</h2>
                                </a>
                            </div>
                        </div>
                        <div className="bg-title">
                            <h4 className='text-uppercase fw-bold'>sale off</h4>
                        </div>
                    </div>
                </Row>
                <div className="new_arrivals">
                    <h2 className='text-capitalize fs-3 mb-4'>New Arrivals</h2>
                    <div className="Products_box_section d-flex pb-4">
                        <Row className="g-3 flex-wrap">
                            {cyberweekend.map((item, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                    <div key={index} className='Products_box d-flex py-2 px-2 flex-wrap p-3 rounded-3 bg-white'>
                                        <a href="#">
                                            <div className="img_box col-12 position-relative">
                                                {item.img}
                                                {item.isHot && <span className="badge hot">HOT</span>}
                                                {item.discount && <span className="badge discount">{item.discount}</span>}
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
                                            <h6 className='text-capitalize text-start d-flex align-items-center mt-2'>{item.mainprice} <span className='text-decoration-line-through d-flex align-items-center ms-2'>{item.cutprice}</span></h6>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <a href="#" className='all_products'>See All Products</a>
                </div>
            </Container>
        </section>
    )
}

export default Cyberweekend
