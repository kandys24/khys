import React, { } from 'react';
import './Services.css';
import Service from './Service';
import candyBar from './img/banner/CandyBar.png';
import candycru from './img/banner/KHYSCruh.jpg';

function Services() {
    

    return (
        <div className='services'>
            <h1>Our Best Product</h1>
            <div className='services__service'>
                <Service 
                    imgSrc={candyBar} 
                    title="Tropical Snack Bar" 
                    description="" 
                />
                <Service 
                    imgSrc={candycru} 
                    title="Crunch craze crackers" 
                    description="" 
                />
            </div>
        </div>
    )
}

export default Services;