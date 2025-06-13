import React from 'react';
import Header from './Header';
import Homeslider from './Homeslider';
import Facilities from './Facilities';
import Weeksales from './Weeksales';
import Banner from './Banner';
import Cyberweekend from './Cyberweekend';
import Cashback from './Cashback';
import Shopdepartment from './Shopdepartment';
import Logoslider from './Logoslider';
import Footer from './Footer';

function Homepage() {
    return (
        <div>
            <Header />
            <Homeslider />
            <Facilities />
            <Weeksales />
            <Banner />
            <Cyberweekend />
            <Cashback />
            <Shopdepartment />
            <Logoslider />
            <Footer />
        </div>
    )
}

export default Homepage
