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
            <div className='products'>
                {/* <img
                    src="https://cdn.shopify.com/s/files/1/0569/3076/2932/products/ByVilainSidekickzerolimitededition2022155mlfront-min_600x.jpg?v=1653914803"
                    alt=""
                />
                <span>By Vilain Limited Edition 2-Pack</span>
                <span>€22,00</span>
                <button className="btn btn-dark">Add to Cart</button> */}
                {favoriteProduct?.favorite?.map((product) => (
                    <div className='col-3' key={product._id}>
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomerFavorites;
