import React from 'react';
import '../Styles/cashback.css';

function Cashback() {
    return (
        <section className='cash_back_section px-4 mt-4'>
            <div className="container-lg">
                <div className="row">
                    <div className="cash_back d-flex rounded-2 py-3 px-5 flex-wrap flex-md-nowrap row-gap-4 justify-content-center">
                        <div className="d-flex align-items-center col-12 col-sm-7 flex-wrap flex-lg-nowrap gap-4">
                            <div className="cash_back_text text-center text-md-start col-12 col-lg-8">
                                <h3 className='fs-4'>Earn Cash Back For The Things You Buy Every Where</h3>
                                <span>Application via Merto. </span>
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                            <div className="vew_btn col-12 col-lg text-center text-md-start">
                                <a href="#" className='text-uppercase px-4 py-3 fw-bold rounded-2'>view more</a>
                            </div>
                        </div>
                        <div className="cash_back_img">
                            <img src={require('../img/payments-2-1.png')} alt="" className='col-12' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cashback
