import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from 'utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, userSelector } from 'store/reducers/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

function ProductItem({ product }) {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const addToCart = async (product) => {
        if (!user) return alert('Invalid Authentication');
        let cart = user?.cart || [];
        const productExist = cart.find((prod) => prod._id === product._id);
        if (productExist) {
            cart = cart.map((prod) =>
                prod._id === product._id
                    ? { ...productExist, quantity: productExist.quantity + 1 }
                    : prod
            );
        } else {
            cart = [...cart, { ...product, quantity: 1 }];
        }
        const apiRequest = 'product';
        const resultAction = await dispatch(addCart({ user, cart, apiRequest }));
        const cartResult = unwrapResult(resultAction);
        console.log(cartResult);
        if (cartResult) {
            toast.success('Add to cart successfully!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <>
            <ToastContainer />
            <Link to={`/product-list/${product._id}`}>
                <img src={product.images} alt={product.name} className='product-img' />
            </Link>
            <div className='product-item-info'>
                <Link to={`/product-list/${product.id}`}>
                    <p>{product.name}</p>
                </Link>
                <p>
                    <span className='currency'>€</span>
                    {formatNumber(product.price)}
                </p>
                <button onClick={() => addToCart(product)} className='btn btn-dark btn-add'>
                    Add to Cart
                </button>
            </div>
        </>
    );
}

export default ProductItem;
