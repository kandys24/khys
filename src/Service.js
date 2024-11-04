import React from 'react';
import './Service.css';

const Service = ({ imgSrc, title, description }) =>{
    
    return (
        <div  className="service-box">
            <img src={imgSrc} alt={title} className="service-img" />
            <h2 className="service-title">{title}</h2>
            <div></div>
            <p className="service-description">{description}</p>
        </div>
    )
}

export default Service;