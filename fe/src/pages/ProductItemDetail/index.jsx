import { unwrapResult } from '@reduxjs/toolkit';
import Overlay from 'components/Overlay';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { getOneProduct, productSelector } from 'store/reducers/productSlice';
import { addCart, userSelector } from 'store/reducers/userSlice';
import { formatNumber } from 'utils';
import './productItemDetail.scss';

function ProductItemDetail() {
    const param = useParams();
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const user = useSelector(userSelector);
    const products = useSelector(productSelector);
    const dispatch = useDispatch();

    const addToCart = async (product) => {
        if (!user) return alert('Invalid Authentication');
        let cart = user?.cart || [];
        const productExist = cart.find((prod) => prod._id === product._id);
        if (productExist) {
            cart = cart.map((prod) =>
                prod._id === product._id
                    ? {
                          ...productExist,
                          quantity: productExist.quantity + quantity,
                      }
                    : prod
            );
        } else {
            cart = [...cart, { ...product, quantity: quantity }];
        }
        const apiRequest = 'productDetail';

        const resultAction = await dispatch(addCart({ user, cart, apiRequest }));
        const cartResult = unwrapResult(resultAction);
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

    const changeQuantity = (status) => {
        if (status === 1) {
            if (quantity < products?.one?.amount) {
                setQuantity(quantity + 1);
            }
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const resultAction = await dispatch(getOneProduct(param.id));
            const product = unwrapResult(resultAction);
            if (product) {
                setLoading(false);
            }
        };
        getProduct();
    }, [dispatch, param.id]);

    return (
        <>
            <ToastContainer />

            {!loading ? (
                <div className='product-item-detail'>
                    <img src={products?.one?.images} alt='gold' />
                    <div className='description'>
                        <h1 className='product-name'>{products?.one?.name}</h1>
                        <h1>
                            <span>€</span>
                            {formatNumber(products?.one?.price)}
                        </h1>

                        <div className='quantity'>
                            <button className='sub-btn' onClick={() => changeQuantity(-1)}>
                                -
                            </button>
                            <span>{quantity}</span>

                            <button className='add-btn' onClick={() => changeQuantity(1)}>
                                +
                            </button>
                        </div>
                        <button onClick={() => addToCart(products?.one)} className='buy-product'>
                            Add to Cart
                        </button>
                        <div className='product-title'>
                            <h1>
                                The By Vilain Gold Digger Hairwax with Extreme Hold & Matte Finish
                            </h1>
                            <p>
                                <span>Description: </span>
                                {products?.one?.description}
                            </p>
                            <ul>
                                <li>{products?.one?.description}</li>
                                <li>{products?.one?.description}</li>
                                <li>{products?.one?.description}</li>
                                <li>{products?.one?.description}</li>
                                <li>{products?.one?.description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <Overlay />
            )}
        </>
    );
}

export default ProductItemDetail;
