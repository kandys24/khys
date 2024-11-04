import React, { useEffect, useState } from 'react';
import './Banner.css';
import candyBar from './img/banner/CandyBar.png';
import Modal from './Modal';

const Banner = () => {
    const [current, setCurrent] = useState(0); // Index of the current image
    const images = [candyBar, candyBar, candyBar]; // Array of images
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent(prevImage => (prevImage + 1) % images.length);
        }, 7000);
    
        return () => clearInterval(intervalId);
    }, []);
  
    const previousImage = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
  
    const nextImage = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const handleOpenModal = () =>{
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };
  
    return (
        <>
            <div className='banne'>
                <div className="banner">
                </div>
                <div className="banner__box">
                    <img style={{width: '280px'}} src={candyBar} alt={`CandyBar`} />
                    <div className='banner__box__tittle'><h1>Tropical Snack Bar</h1></div>
                </div>
            </div>
            {isModalOpen && (
                <Modal closeModal={closeModal} />
            )}
        </>
    );
  };
  
  export default Banner;