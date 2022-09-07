import { useDispatch, useSelector } from 'react-redux';
import { addCart, userSelector } from 'store/reducers/userSlice';
import { formatNumber } from 'utils';

function CartItem({ item }) {
    const user = useSelector(userSelector);

    const dispatch = useDispatch();
    //Handle Button PLUS +
    const increaseQuantity = (prod) => {
        let cart = [...user.cart];
        cart = cart.map((product) =>
            product._id === prod._id
                ? {
                      ...product,
                      quantity:
                          product.quantity < product.amount ? product.quantity + 1 : product.amount,
                  }
                : product
        );

        addToCart(cart);
    };

    //Handle Button SUB -
    const decreaseQuantity = (prod) => {
        let cart = [...user.cart];
        cart = cart.map((product) =>
            product._id === prod._id
                ? {
                      ...product,
                      quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity,
                  }
                : product
        );

        addToCart(cart);
    };

    const deleteProduct = (prod) => {
        let cart = [...user.cart];
        cart = cart.filter((product) => product._id !== prod._id);

        addToCart(cart);
    };

    const addToCart = (cart) => {
        console.log('cart products: ', cart);
        const apiRequest = 'product';
        dispatch(addCart({ user, cart, apiRequest }));
    };

    return (
        <div className='cart-item'>
            <img src={item.images} alt='gold' width='150' height='150' />
            <div className='cart-text'>
                <p className='name'>{item.name}</p>
                <p className='price'>
                    <span className='currency'>€</span>
                    {formatNumber(item.price)}
                </p>
                <div className='quantity'>
                    <button className='sub-btn' onClick={() => decreaseQuantity(item)}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button className='add-btn' onClick={() => increaseQuantity(item)}>
                        +
                    </button>
                </div>
            </div>
            <div className='close' onClick={() => deleteProduct(item)}>
                <i className='far fa-times-circle'></i>
            </div>
        </div>
    );
}

export default CartItem;
