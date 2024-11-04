import React from 'react';
import './ContactComponent.css';
import phone from './img/icons/phone.png';
import email from './img/icons/email.png';
import address from './img/icons/address.png';

const ContactComponent = () => {
    return (
        <div className="contact-component">
            <div className="info-container">
                 <div className="info-item">
                    <div className='icon'>
                        <img src={phone} alt="Ligue" />
                    </div>
                    <div className="title-container">
                        <h3>Call</h3>
                        <label>+263 78 372 1283</label>
                        <label>+263 916 587 193</label>
                        {/* <label>+263 923 356 553</label> */}
                    </div>
                </div>
                <div className="info-item info-item-middle">
                    <div className='icon'>
                        <img src={email} alt="Ligue" />
                    </div>
                    <div className="title-container">
                        <h3>Send us an Email</h3>
                        <label>khyssnacks@gmail.com</label>
                        {/* <label>info@khys.com</label> */}
                    </div>
                </div>
                <div className="info-item">
                    <div className='icon'>
                        <img src={address} alt="Ligue" />
                    </div>
                    <div className="title-container">
                        <h3>Our Address</h3>
                        <label>Chinhoyi University of Technology P Bag 7724 Chinhoyi</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;