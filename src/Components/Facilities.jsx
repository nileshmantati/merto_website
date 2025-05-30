import React from 'react';
import '../Styles/facilities.css'

function Facilities() {
    return (
        <div>
            <div className="facility_box px-lg-5 px-sm-3 py-5">
                <div className="container-fluid px-0 bg-success">
                    <div className="shipping_box d-flex">
                        <div className="icon_box">
                            <i className="fa-solid fa-truck fa-2x" />
                        </div>
                        <div className="text_box d-flex flex-column align-items-start">
                            <h6 className='text-capitalize mb-0'>fast, free shipping</h6>
                            <span className=''>On order over $50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Facilities
