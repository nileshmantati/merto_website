import React from 'react';
import '../Styles/facilities.css'

function Facilities() {
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
        title: "quality guarantee",
        description: "We Guarantee Our Products",
        img: <i className="fa-solid fa-thumbs-up" />
    }
    ];
    return (
        <div>
            <div className="facility_box container py-5">
                <div className="container-fluid px-0 d-flex column-md-gap-5 flex-wrap flex-lg-nowrap row-gap-5">
                    {Facility_card.map((item, index) => (
                        <div key={index} className="shipping_box d-flex col-12 col-sm-6 col-lg border-md-1 border-md-end flex-wrap row-gap-4">
                            <div className="icon_box col-12 col-xl-2 me-xl-3">
                                {item.img}
                            </div>
                            <div className="text_box d-flex flex-column col-12 col-xl align-items-center align-items-xl-start">
                                <h6 className='text-capitalize mb-0'>{item.title}</h6>
                                <span className='mt-1'>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Facilities
