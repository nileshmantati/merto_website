import React from 'react';
import '../Styles/cyberweekend.css';

function Cyberweekend() {
    return (
        <section className='py-5'>
            <div className="mainbox">
                <h2 className='text-capitalize fs-4'>Cyber weekend</h2>
                <div className="content d-flex">
                    <div className="box">
                        <a href="#" className=' text-decoration-none'>
                            <h2>+10% <br />OFF</h2>
                        </a>
                    </div>
                    <div className="box">
                        <a href="#" className=' text-decoration-none'>
                            <h2>+20% <br />OFF</h2>
                        </a>
                    </div>
                    <div className="box">
                        <a href="#" className=' text-decoration-none'>
                            <h2>+30% <br />OFF</h2>
                        </a>
                    </div>
                    <div className="box">
                        <a href="#" className=' text-decoration-none'>
                            <h2>+40% <br />OFF</h2>
                        </a>
                    </div>
                    <div className="dark_box">
                        <a href="#" className=' text-decoration-none'>
                            <h2>+50% <br />OFF</h2>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cyberweekend
