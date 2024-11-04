import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Navbar from './Navbar';
import Banner from './Banner';
import Services from './Services';
import CompanyInfo from './CompanyInfo';
import ContactComponent from './ContactComponent';
import Footer from './Footer';
import './Mediaquery.css';

function App() {
    return (
        <div className='app'>
            <Element name="home">
                <Navbar />
                {/* Home content goes here */}
                <Banner />
            </Element>
            <Element name="services">
                {/* Logistics Services content goes here */}
                <Services />
            </Element>
            <Element name="warehouse">
                {/* Warehouse content goes here */}
            </Element>
            <Element name="transportations">
                {/* Transportations content goes here */}
            </Element>
            <Element name="about">
                {/* About Us content goes here */}
                <CompanyInfo />
            </Element>
            <Element name="contact">
                {/* Contact Us content goes here */}
                <ContactComponent />
                <Footer />
            </Element>
        </div>
    )
}

export default App;