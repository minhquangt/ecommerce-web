import React from 'react';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import './carousel.scss';
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-indicators'>
                <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='0'
                    className='active'
                    aria-current='true'
                    aria-label='Slide 1'
                ></button>
                <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='1'
                    aria-label='Slide 2'
                ></button>
            </div>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={banner1} className='d-block w-100' alt='...' />
                    <div className='carousel-content'>
                        <h2>Take your hairgame to the next level</h2>
                        <p>
                            By Vilain products are a blend of stylish sophistication, professional
                            dynamism, and clean
                            <br />
                            minimalism. Raise the standards for your hair with By Vilain.
                        </p>
                        <Link to='/product-list' className='btn btn-light'>
                            SHOP NOW
                        </Link>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={banner2} className='d-block w-100' alt='...' />
                    <div className='carousel-content'>
                        <h2>BY VILAIN SKINCARE SOLUTION 2-PACK</h2>
                        <p>
                            with Aloe Vera + Hyaluronic Acid + B3 Vitamin + Panthenol + Allantoin +
                            Hydrolyzed <br /> Cottonseed extract
                        </p>
                        <ul>
                            <li>Combats fine lines & renews skin</li>
                            <li>Protects & strengthens</li>
                            <li>Free of alcohol & fragrance</li>
                            <li>100% vegan ingredients</li>
                        </ul>
                        <button className='btn btn-light'>READ MORE...</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
