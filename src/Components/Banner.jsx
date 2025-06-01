import React from 'react'
import '../Styles/banner.css';

function Banner() {
    return (
        <section className='banner container'>
            <div className="banner_main d-flex flex-wrap flex-md-nowrap">
                <div className="left_banner col-12 col-md-6 position-relative">
                    <img src={require('../img/banner1-demo3.jpg')} alt="" />
                    <div className="text_box position-absolute top-0 start-0 d-flex flex-column align-items-start ps-4 ps-sm-5 pt-sm-5">
                        <span className='text-uppercase fw-medium text-white pt-4 fs-6 fs-sm-5'>DESIGN BY COZY</span>
                        <h2 className='text-white mt-2 text-start fs-5 fs-sm-2 fs-md-1'>Modern Mini Couch</h2>
                        <p className='text-white fs-6 fs-md-5'>51 Inches Loveseat Sofa</p>
                        <a href="#" className="text-uppercase text-decoration-none fw-bold border-1 border px-3 py-2 mt-3 rounded-2 fs-6 fs-sm-5">shop now</a>
                    </div>
                </div>
                <div className="right_banner col-12 col-md-6">
                    <div className="right_up position-relative col">
                        <img src={require('../img/banner2-demo3.jpg')} alt="" />
                        <div className="text_box position-absolute top-0 start-0 d-flex flex-column align-items-start ps-4 ps-sm-5 ps-md-4 pt-4 pt-sm-5 pt-md-4 pt-lg-5 ps-lg-5">
                            <h2 className='text-black mt-2 text-start text-capitalize fs-5 fs-sm-2 fs-md-1'>plant pots <br />
                                only <span className='text-black text-decoration-underline'>$14.00</span></h2>
                            <p className='text-black fs-6 fs-md-5 mb-2'>Don't miss the opportunity...</p>
                            <a href="#" className="text-uppercase text-decoration-none fw-bold border-1 border-black border px-3 py-2 mt-0 mt-sm-3 mt-md-0 rounded-2 fs-6 fs-sm-5">shop now</a>
                        </div>
                        <div className="tag position-absolute rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                            <h3 className='text-white fs-6 fs-sm-5 mb-0'>-30%</h3>
                        </div>
                    </div>
                    <div className="right_down position-relative">
                        <img src={require('../img/banner3-demo3.jpg')} alt="" />
                        <div className="text_box position-absolute top-0 start-0 d-flex flex-column align-items-start ps-4 ps-sm-5 ps-md-4 pt-4 pt-sm-5 pt-md-4 pt-lg-5 ps-lg-5">
                            <span className='text-uppercase fw-medium text-white pt-4 fs-6 fs-sm-5'>NEW ARRIVALS</span>
                            <h2 className='text-white mt-2 text-start fs-5 fs-sm-2 fs-md-1'>Romina <br />
                                Table Lamp</h2>
                            <p className='text-white fs-6 fs-md-5 mb-1'>Creates gentle elegance</p>
                            <a href="#" className="text-uppercase text-decoration-none fw-bold border-1 border px-3 py-2 mt-0 mt-sm-3 rounded-2 fs-6 fs-sm-5">shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner
