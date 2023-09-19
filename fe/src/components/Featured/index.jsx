import React from 'react';
import waxes from '../../assets/wax.jpg';
import prestyling from '../../assets/prestyling.jpg';
import featured1 from '../../assets/featured1.avif';
import featured2 from '../../assets/featured2.avif';
import featured3 from '../../assets/featured3.avif';
import featured4 from '../../assets/featured4.avif';
import featured5 from '../../assets/featured5.avif';
import './featured.scss';
import { Link } from 'react-router-dom';

function Featured() {
    return (
        <>
            <div className='text-center categories'>
                <div className='title'>
                    <h2>+1 Million Products Sold World Wide!</h2>
                    <span>By Loyal customers from +120 countries</span>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-12 category'>
                        <img src={waxes} alt='waxes' />
                        <div className='category-content'>
                            <h2>Hair Waxes</h2>
                            <Link to='/product-list' className='btn btn-dark'>
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 category'>
                        <img src={prestyling} alt='prestyling' />
                        <div className='category-content'>
                            <h2>Pre-styling</h2>
                            <Link to='/product-list' className='btn btn-dark'>
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center featured-here'>
                <h2>FEATURED HERE</h2>
                <div className='feature-photo'>
                    <img src={featured1} alt='featured1' />
                    <img src={featured2} alt='featured2' />
                    <img src={featured3} alt='featured3' />
                    <img src={featured4} alt='featured4' />
                    <img src={featured5} alt='featured5' />
                </div>
            </div>
        </>
    );
}

export default Featured;
