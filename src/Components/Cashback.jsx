import React from 'react';
import '../Styles/cashback.css';

function Cashback() {
    return (
        <section className='cash_back_section'>
            <div className="container">
                <div className="row">
                    <div className="cash_back d-flex rounded-2 py-4 px-5">
                        <div className="cash_back_text text-start d-flex">
                            <h3 className='fs-3 text-start'>Earn Cash Back For The Things You Buy Every Where</h3>
                            <span>Application via Merto. </span>
                            <a href="#">Terms &amp; Conditions</a>
                            <div className="vew_btn">
                                <a href="#" className='text-uppercase'>view more</a>
                            </div>
                        </div>
                        <div className="cash_back_img">
                            <img src={require('../img/payments-2-1.png')} alt="" className='h-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cashback
