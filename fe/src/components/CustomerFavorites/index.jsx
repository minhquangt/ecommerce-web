import ProductItem from 'pages/ProductItem';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProducts, productSelector } from 'store/reducers/productSlice';
import './customerFavorites.scss';

function CustomerFavorites() {
    const favoriteProduct = useSelector(productSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoriteProducts());
    }, []);
    return (
        <div className='customer-favorites'>
            <div className='text-center title'>
                <h2>Customer Favorites</h2>
                <span>
                    For the style-conscious man who wants to take their haircare game to the next
                    level
                </span>
            </div>
            <div className='row products'>
                {favoriteProduct?.favorite?.map((product) => (
                    <div className='col-md-3 col-6 product-item' key={product._id}>
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomerFavorites;
